from django.contrib import admin
from .models import Planta, ImagemPlanta, Mensagem, Postagem, Atividade

# Register your models here.
admin.site.register(Planta)
admin.site.register(ImagemPlanta)
admin.site.register(Atividade)
admin.site.register(Mensagem)
admin.site.register(Postagem)