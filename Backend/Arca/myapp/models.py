from django.db import models
from django.core.validators import validate_email
from ckeditor_uploader.fields import RichTextUploadingField 

from django.template.loader import render_to_string
from django.db.models.signals import pre_save
from django.db.models.signals import post_save
from django.dispatch import receiver
import logging
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
from django.http import JsonResponse
from django.core.files.storage import default_storage
import os
from email.mime.image import MIMEImage
from django.conf import settings

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

from django.db import models

class Planta(models.Model):
    apelido = models.CharField(max_length=100)
    nome_cientifico = models.CharField(max_length=100, blank=True)
    resumo = models.TextField()
    texto = models.TextField()
    
    def __str__(self):
        return self.apelido

class CoordenadaPlanta(models.Model):
    planta = models.ForeignKey(Planta, related_name='coordenadas', on_delete=models.CASCADE)
    posicao_x = models.FloatField()
    posicao_y = models.FloatField()

    class Meta: 
        verbose_name_plural='Coordenadas Planta'

    def __str__(self):
        return f"({self.posicao_x}, {self.posicao_y})"

class ImagemPlanta(models.Model):
    planta = models.ForeignKey(Planta, related_name='imagens', on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='imagens_plantas/')
    descricao = models.CharField(max_length=100, blank=True, null=True)
    tags = models.CharField(max_length=300, blank=True, null=True)

    class Meta: 
        verbose_name_plural='Imagens Planta'

    def __str__(self):
        return f"Imagem da Planta: {self.planta.apelido}"

class Mensagem(models.Model):
    email = models.EmailField()
    assunto = models.CharField(max_length=100)
    mensagem = models.TextField()

    class Meta: 
        verbose_name_plural='Mensagens'

    def __str__(self):
        return self.email
    
class Equipe(models.Model):
    nome = models.CharField(max_length=200)
    imagem = models.ImageField(upload_to='imagens_equipe/')
    cargo = models.CharField(max_length=200)
    biografia = RichTextUploadingField()
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.nome
    
class Atividade(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = RichTextUploadingField()
    autores_equipe = models.ManyToManyField(Equipe, blank=True)
    data = models.DateField()

    def __str__(self):
        return self.titulo

class Postagem(models.Model):
    titulo = models.CharField(max_length=200)
    imagem = models.ImageField(upload_to='imagens_postagens/')
    conteudo = RichTextUploadingField()
    autor_equipe = models.ForeignKey(Equipe, on_delete=models.SET_NULL, null=True, blank=True)
    data = models.DateField()
    link = models.URLField(blank=True, null=True)

    class Meta: 
        verbose_name_plural='Postagens'

    def __str__(self):
        return self.titulo

class Configuracao(models.Model):
    mostrar_agenda = models.BooleanField(default=True)

    class Meta: 
        verbose_name='Configuração'
        verbose_name_plural='Configurações'

    def delete(self, *args, **kwargs):
        # Impede a exclusão do objeto
        raise ValueError('A exclusão de objetos Configuracao não é permitida, apenas altere seu estado conforme necessário.')

@receiver(pre_save, sender=Configuracao)
def valida_apenas_uma_configuracao(sender, instance, **kwargs):
    # Verifica se já existe uma instância de Configuracao
    existe_configuracao = Configuracao.objects.exists()

    # Se existir, impede a criação de uma nova instância
    if existe_configuracao and not instance.pk:
        raise ValueError('Já existe uma configuração. Atualize a instância existente em vez de criar uma nova.')
    
class Inscrito(models.Model):
    nome = models.CharField(max_length=200)
    email = models.EmailField((""), max_length=254, unique=True, validators=[validate_email])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
    

def adicionar_postagem(request, postagem):
    # Recuperar todos os inscritos no blog
    inscritos = Inscrito.objects.all()
    
    # Obter a imagem que você deseja anexar
    imagem = postagem.imagem 
    
    # Caminho da imagem
    post_path = default_storage.path(imagem.name)
    
    # Nome da imagem
    imagem_name = imagem.name.split('/')[-1]
    
    # Gerar um CID para a imagem
    post_cid = os.path.basename(post_path)
    
    # Caminho da logo
    logo_path = os.path.join(settings.STATICFILES_DIRS[0], 'logo/logo.png')  
    
    # Gerar um CID para a logo
    logo_cid = os.path.basename(logo_path)

    # Renderizar o conteúdo HTML do e-mail com o contexto atualizado
    resumo=postagem.conteudo[0:150] + '...'
    html_content = render_to_string('emails/mensagemBlog.html', {'postagem': postagem, 'resumo': resumo,'post_cid': post_cid, 'logo_cid': logo_cid})
    
    # Enviar e-mail para cada inscrito
    for inscrito in inscritos:
        subject = 'Nova Postagem no Blog'
        
        # Criar o e-mail com uma versão HTML e uma versão de texto simples
        msg = EmailMultiAlternatives(subject, strip_tags(html_content), 'testearca092@gmail.com', [inscrito.email])
        
        # Anexar a imagem ao e-mail
        with open(post_path, 'rb') as f:
            msg_image = MIMEImage(f.read())
            msg_image.add_header('Content-ID', f'<{post_cid}>')
            msg.attach(msg_image)
        
        # Anexar a logo ao e-mail
        with open(logo_path, 'rb') as f:
            msg_image = MIMEImage(f.read())
            msg_image.add_header('Content-ID', f'<{logo_cid}>')
            msg.attach(msg_image)
        
        msg.attach_alternative(html_content, "text/html")
        msg.send()
    
    return JsonResponse({'status': 'success'})

@receiver(post_save, sender=Postagem)
def enviar_email_nova_postagem(sender, instance, created, **kwargs):
    if created:  # Verifique se a postagem foi recém-criada
        adicionar_postagem(None, instance)