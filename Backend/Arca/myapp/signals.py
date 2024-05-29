from django.db.models.signals import pre_delete
from django.dispatch import receiver
from .models import Planta, ImagemPlanta, Equipe, Postagem
from .utils import delete_image_file

@receiver(pre_delete, sender=Planta)
def delete_associated_images(sender, instance, **kwargs):
    # Exclui as imagens associadas
    for imagem in instance.imagens.all():
        imagem.delete()

@receiver(pre_delete, sender=ImagemPlanta)
def delete_imagem_planta_file(sender, instance, **kwargs):
    delete_image_file(instance, **kwargs)

@receiver(pre_delete, sender=Equipe)
def delete_equipe_image_file(sender, instance, **kwargs):
    delete_image_file(instance, **kwargs)

@receiver(pre_delete, sender=Postagem)
def delete_postagem_image_file(sender, instance, **kwargs):
    delete_image_file(instance, **kwargs)