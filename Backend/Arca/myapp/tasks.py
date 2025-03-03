import os
from celery import shared_task
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.files.storage import default_storage
from django.conf import settings
from email.mime.image import MIMEImage

@shared_task
def enviar_email_postagem(postagem_id):
    from myapp.models import Postagem, Inscrito  # Importação dentro da função para evitar importações circulares

    # Recuperar a postagem
    postagem = Postagem.objects.get(id=postagem_id)
    
    # Recuperar todos os inscritos no blog
    inscritos = Inscrito.objects.all()
    
    # Obter a imagem que você deseja anexar
    imagem = postagem.imagem  
    post_path = default_storage.path(imagem.name)
    post_cid = os.path.basename(post_path)

    # Caminho da logo
    logo_path = os.path.join(settings.BASE_DIR, 'staticfiles/logo/logo.png')  
    logo_cid = os.path.basename(logo_path)

    # Criar o conteúdo do e-mail
    resumo = postagem.conteudo[:150] + '...'
    html_content = render_to_string('emails/mensagemBlog.html', {'postagem': postagem, 'resumo': resumo, 'post_cid': post_cid, 'logo_cid': logo_cid, 'postagem_id': postagem_id})

    # Enviar e-mail para cada inscrito
    for inscrito in inscritos:
        subject = 'Nova Postagem no Blog'
        msg = EmailMultiAlternatives(subject, strip_tags(html_content), 'testearca092@gmail.com', [inscrito.email])

        # Anexar a imagem
        with open(post_path, 'rb') as f:
            msg_image = MIMEImage(f.read())
            msg_image.add_header('Content-ID', f'<{post_cid}>')
            msg.attach(msg_image)
        
        # Anexar a logo
        with open(logo_path, 'rb') as f:
            msg_image = MIMEImage(f.read())
            msg_image.add_header('Content-ID', f'<{logo_cid}>')
            msg.attach(msg_image)

        msg.attach_alternative(html_content, "text/html")
        msg.send()

    return "E-mails enviados com sucesso!"
