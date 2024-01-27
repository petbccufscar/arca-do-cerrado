from rest_framework import serializers
from . import models

class ImagemPlantaSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.ImagemPlanta
        fields = '__all__'

class PlantaSerializers(serializers.ModelSerializer):
    imagens = ImagemPlantaSerializers(many=True, read_only=True)

    class Meta:
        model = models.Planta
        fields = '__all__'

class MensagemSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Mensagem
        fields = '__all__'

class AtividadeSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Atividade
        fields = '__all__'

class PostagemSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Postagem
        fields = '__all__'

class EquipeSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Equipe
        fields = '__all__'

class ConfiguracaoSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Configuracao
        fields = '__all__'