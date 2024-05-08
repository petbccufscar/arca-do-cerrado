# Generated by Django 5.0.3 on 2024-04-09 20:35

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0020_alter_configuracao_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='atividade',
            name='imagem',
            field=models.ImageField(default=django.utils.timezone.now, upload_to='imagens_atividade/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='equipe',
            name='imagem',
            field=models.ImageField(default=django.utils.timezone.now, upload_to='imagens_equipe/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='postagem',
            name='imagem',
            field=models.ImageField(default=django.utils.timezone.now, upload_to='imagens_postagens/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='postagem',
            name='link',
            field=models.URLField(null=True),
        ),
    ]