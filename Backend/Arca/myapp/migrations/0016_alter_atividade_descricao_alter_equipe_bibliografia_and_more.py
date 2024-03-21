# Generated by Django 5.0.3 on 2024-03-20 22:02

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0015_alter_imagemplanta_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='atividade',
            name='descricao',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
        migrations.AlterField(
            model_name='equipe',
            name='bibliografia',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
        migrations.AlterField(
            model_name='planta',
            name='resumo',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
        migrations.AlterField(
            model_name='planta',
            name='texto',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
        migrations.AlterField(
            model_name='postagem',
            name='conteudo',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
    ]
