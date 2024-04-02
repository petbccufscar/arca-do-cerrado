# Generated by Django 5.0.1 on 2024-04-02 21:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0017_rename_bibliografia_equipe_biografia'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='planta',
            name='posicao_x',
        ),
        migrations.RemoveField(
            model_name='planta',
            name='posicao_y',
        ),
        migrations.AlterField(
            model_name='planta',
            name='resumo',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='planta',
            name='texto',
            field=models.TextField(),
        ),
        migrations.CreateModel(
            name='Coordenada',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('posicao_x', models.FloatField()),
                ('posicao_y', models.FloatField()),
                ('planta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.planta')),
            ],
        ),
    ]
