from django.contrib import admin
from .models import Planta, ImagemPlanta, Mensagem, Postagem, Atividade, Equipe, Configuracao, Inscrito, CoordenadaPlanta
from .forms import PostagemForm, PlantaForm, AtividadeForm, EquipeForm

class ImagemPlantaInline(admin.TabularInline):
    model = ImagemPlanta
    extra = 1

class CoordenadaPlantaInline(admin.TabularInline):
    model = CoordenadaPlanta
    extra = 1

class PlantaAdmin(admin.ModelAdmin):
    form = PlantaForm
    inlines = [ImagemPlantaInline, CoordenadaPlantaInline]

class PostagemAdmin(admin.ModelAdmin):
    form = PostagemForm

class AtividadeAdmin(admin.ModelAdmin):
    form = AtividadeForm

class EquipeAdmin(admin.ModelAdmin):
    form = EquipeForm

# Registre os ModelAdmins personalizados
admin.site.register(Planta, PlantaAdmin)
admin.site.register(Postagem, PostagemAdmin)
admin.site.register(Equipe, EquipeAdmin)
admin.site.register(Atividade, AtividadeAdmin)
admin.site.register(Mensagem)
admin.site.register(Configuracao)
admin.site.register(Inscrito)
