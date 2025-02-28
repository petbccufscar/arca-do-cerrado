# Use uma imagem base leve do Python
FROM python:3.10-slim

# Define o diretório de trabalho no container
WORKDIR /django-app

ENV PYTHONUNBUFFERED=1

# Copia o arquivo de dependências
COPY requirements.txt requirements.txt

# Instala as dependências no container
RUN pip install --no-cache-dir -r requirements.txt

# Copia o conteúdo do backend para o container
COPY . .

# Coleta arquivos estáticos apenas em produção
ARG ENVIRONMENT
RUN python manage.py collectstatic --noinput

# Exponha a porta 8000
EXPOSE 8000

# Comando para iniciar o servidor
CMD gunicorn Arca.wsgi:application --bind 0.0.0.0:8000