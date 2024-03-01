from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from . import serializers
from . import models
from django.core.mail import send_mail
from django.http import JsonResponse

# Create your views here.

class PlantaViewSet(viewsets.ModelViewSet):
    queryset = models.Planta.objects.all()
    serializer_class = serializers.PlantaSerializers

class ImagemPlantaViewSet(viewsets.ModelViewSet):
    queryset = models.ImagemPlanta.objects.all()
    serializer_class = serializers.ImagemPlantaSerializers

class MensagemViewSet(viewsets.ModelViewSet):
    queryset = models.Mensagem.objects.all()
    serializer_class = serializers.MensagemSerializers
    
class PostagemViewSet(viewsets.ModelViewSet):
    queryset = models.Postagem.objects.all()
    serializer_class = serializers.PostagemSerializers

class AtividadeViewSet(viewsets.ModelViewSet):
    queryset = models.Atividade.objects.all()
    serializer_class = serializers.AtividadeSerializers

class EquipeViewSet(viewsets.ModelViewSet):
    queryset = models.Equipe.objects.all()
    serializer_class = serializers.EquipeSerializers

class ConfiguracaoViewSet(viewsets.ModelViewSet):
    queryset = models.Configuracao.objects.all()
    serializer_class = serializers.ConfiguracaoSerializers

class InscritoViewSet(viewsets.ModelViewSet):
    queryset = models.Inscrito.objects.all()
    serializer_class = serializers.InscritoSerializers
