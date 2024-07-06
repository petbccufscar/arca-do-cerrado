from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Planta, ImagemPlanta, Mensagem, Postagem, Atividade, Equipe, Configuracao, Inscrito, CoordenadaPlanta
from .forms import PostagemForm, PlantaForm, AtividadeForm, EquipeForm

class ImagemPlantaInline(admin.TabularInline):
    model = ImagemPlanta
    extra = 1

class CoordenadaPlantaInline(admin.TabularInline):
    model = CoordenadaPlanta
    extra = 1

class PlantaAdmin(ImportExportModelAdmin):
    form = PlantaForm
    inlines = [ImagemPlantaInline, CoordenadaPlantaInline]

class PostagemAdmin(ImportExportModelAdmin):
    form = PostagemForm

class AtividadeAdmin(ImportExportModelAdmin):
    form = AtividadeForm

class EquipeAdmin(ImportExportModelAdmin):
    form = EquipeForm

# Registre os ModelAdmins personalizados
admin.site.register(Planta, PlantaAdmin)
admin.site.register(Postagem, PostagemAdmin)
admin.site.register(Equipe, EquipeAdmin)
admin.site.register(Atividade, AtividadeAdmin)
admin.site.register(Mensagem, ImportExportModelAdmin)
admin.site.register(Configuracao, ImportExportModelAdmin)
admin.site.register(Inscrito, ImportExportModelAdmin)
admin.site.register(CoordenadaPlanta, ImportExportModelAdmin) 
