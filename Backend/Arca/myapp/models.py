from django.db import models
from django.core.validators import validate_email
from ckeditor_uploader.fields import RichTextUploadingField 

from django.db.models.signals import pre_save
from django.db.models.signals import post_save
from django.dispatch import receiver
import logging

from myapp.tasks import enviar_email_postagem

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

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
        ordering = ['id']

    def __str__(self):
        return f"Imagem da Planta: {self.planta.apelido}"

class Mensagem(models.Model):
    email = models.EmailField()
    assunto = models.CharField(max_length=100)
    mensagem = models.TextField()
    data_criacao = models.DateTimeField(auto_now_add=True)

    class Meta: 
        verbose_name_plural='Mensagens'

    def __str__(self):
        return f'Email: {self.email}'
    
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

@receiver(post_save, sender=Postagem)
def enviar_email_nova_postagem(sender, instance, created, **kwargs):
    if created:  # Só enviar e-mails para postagens novas
        enviar_email_postagem.delay(instance.id)  # Chama a task de forma assíncrona

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
    email = models.EmailField(max_length=254, unique=True, validators=[validate_email])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
