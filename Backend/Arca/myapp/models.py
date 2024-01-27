from django.db import models
from ckeditor.fields import RichTextField
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.core.validators import validate_email


class Planta(models.Model):
    apelido = models.CharField(max_length=100)
    nome_cientifico = models.CharField(max_length=100, blank=True)
    resumo = RichTextField()
    texto = RichTextField()
    link = models.URLField()
    posicao_x = models.FloatField(blank=True, null=True) 
    posicao_y = models.FloatField(blank=True, null=True)

    def __str__(self):
        return self.apelido

class ImagemPlanta(models.Model):
    planta = models.ForeignKey(Planta, related_name='imagens', on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='imagens_plantas/')
    descricao = models.CharField(max_length=100, blank=True, null=True)
    tags = models.JSONField(blank=True, null=True) 

    def __str__(self):
        return f"Imagem da Planta: {self.planta.apelido}"

class Mensagem(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    mensagem = models.TextField()

    def __str__(self):
        return self.nome
    
class Equipe(models.Model):
    nome = models.CharField(max_length=200)
    imagem = models.ImageField(upload_to='imagens_equipe/', blank=True, null=True)
    cargo = models.CharField(max_length=200)
    bibliografia = RichTextField()
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.nome
    
class Atividade(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = RichTextField()
    autores_equipe = models.ManyToManyField(Equipe, blank=True)
    data = models.DateField()

    def __str__(self):
        return self.titulo

class Postagem(models.Model):
    titulo = models.CharField(max_length=200)
    imagem = models.ImageField(upload_to='imagens_postagens/', blank=True, null=True)
    conteudo = RichTextField()
    autor_equipe = models.ForeignKey(Equipe, on_delete=models.SET_NULL, null=True, blank=True)
    data = models.DateField()
    link = models.URLField()

    def __str__(self):
        return self.titulo

class Configuracao(models.Model):
    mostrar_agenda = models.BooleanField(default=True)

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