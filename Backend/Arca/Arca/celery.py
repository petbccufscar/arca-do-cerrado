import os
from celery import Celery

# Define as configurações do Django para o Celery
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Arca.settings')

celery_app = Celery('Arca')

# Carregar configurações do Celery do settings.py
celery_app.config_from_object('django.conf:settings', namespace='CELERY')

# Auto descobrir tasks nos apps instalados
celery_app.autodiscover_tasks()

@celery_app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
