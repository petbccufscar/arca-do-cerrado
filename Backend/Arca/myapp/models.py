from django.db import models

class Planta(models.Model):
    apelido = models.CharField(max_length=100)
    nome_cientifico = models.CharField(max_length=100)
    resumo = models.TextField()
    texto = models.TextField()
    link = models.URLField()

    def __str__(self):
        return self.apelido


class ImagemPlanta(models.Model):
    planta = models.ForeignKey(Planta, related_name='imagens', on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='imagens_plantas/')
    descricao = models.CharField(max_length=100, blank=True, null=True)

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
    descricao = models.TextField()
    participantes = models.IntegerField()  # Ajuste esse campo conforme necessário
    data = models.DateField()

    def __str__(self):
        return self.titulo
    
class Postagem(models.Model):
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    autor = models.CharField(max_length=100)
    data = models.DateField()
    link = models.URLField()  # Campo para o link, ajuste conforme necessário

    def __str__(self):
        return self.titulo

