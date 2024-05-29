def delete_image_file(instance, **kwargs):
    if instance.imagem:
        instance.imagem.delete(save=False)
