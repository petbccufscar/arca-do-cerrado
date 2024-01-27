from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Planta', views.PlantaViewSet, basename='Planta')
router.register('ImagemPlanta', views.ImagemPlantaViewSet, basename='ImagemPlanta')
router.register('Mensagem', views.MensagemViewSet, basename='Mensagem')
router.register('Postagem', views.PostagemViewSet, basename='Postagem')
router.register('Atividade', views.AtividadeViewSet, basename='Atividade')
router.register('Equipe', views.EquipeViewSet, basename='Equipe')

urlpatterns = [
    
]

urlpatterns += router.urls