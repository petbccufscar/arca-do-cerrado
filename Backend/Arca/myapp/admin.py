from django.contrib import admin
from .models import Planta, ImagemPlanta, Mensagem, Postagem, Atividade, Equipe, Configuracao
from .forms import PostagemForm, PlantaForm, AtividadeForm, EquipeForm

class PostagemAdmin(admin.ModelAdmin):
    form = PostagemForm

class PlantaAdmin(admin.ModelAdmin):
    form = PlantaForm

class AtividadeAdmin(admin.ModelAdmin):
    form = AtividadeForm

class EquipeAdmin(admin.ModelAdmin):
    form = EquipeForm

# Registrar outros modelos como antes
admin.site.register(Planta)
admin.site.register(ImagemPlanta)
admin.site.register(Atividade)
admin.site.register(Mensagem)
admin.site.register(Configuracao)

# Registrar o modelo Postagem usando o novo admin
admin.site.register(Postagem, PostagemAdmin)
admin.site.register(Equipe, EquipeAdmin)