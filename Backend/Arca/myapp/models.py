from django.db import models
from ckeditor.fields import RichTextField

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

class Atividade(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = RichTextField()
    participantes = models.IntegerField()
    data = models.DateField()

    def __str__(self):
        return self.titulo
    
class Equipe(models.Model):
    nome = models.CharField(max_length=200)
    imagem = models.ImageField(upload_to='imagens_equipe/', blank=True, null=True)
    cargo = models.CharField(max_length=200)
    bibliografia = RichTextField()
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.nome

class Postagem(models.Model):
    titulo = models.CharField(max_length=200)
    imagem = models.ImageField(upload_to='imagens_postagens/', blank=True, null=True)
    conteudo = RichTextField()
    autor_equipe = models.ForeignKey(Equipe, on_delete=models.SET_NULL, null=True, blank=True)
    data = models.DateField()
    link = models.URLField()

    def __str__(self):
        return self.titulo
