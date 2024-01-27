# Generated by Django 4.2.6 on 2024-01-27 09:34

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0011_configuracao'),
    ]

    operations = [
        migrations.CreateModel(
            name='Inscrito',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254, unique=True, validators=[django.core.validators.EmailValidator()], verbose_name='')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
