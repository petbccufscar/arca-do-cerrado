# Generated by Django 4.2.6 on 2024-01-27 04:46

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_remove_planta_imagens_imagemplanta'),
    ]

    operations = [
        migrations.AddField(
            model_name='imagemplanta',
            name='tags',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='planta',
            name='posicao_x',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='planta',
            name='posicao_y',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='planta',
            name='nome_cientifico',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='postagem',
            name='conteudo',
            field=ckeditor.fields.RichTextField(),
        ),
    ]
