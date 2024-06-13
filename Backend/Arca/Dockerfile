# Use a imagem base Python oficial do Docker
FROM python:3.10

# Defina a variável de ambiente PYTHONUNBUFFERED para garantir que os logs sejam exibidos em tempo real
ENV PYTHONUNBUFFERED 1

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo requirements.txt e instale as dependências
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Copie o restante do código-fonte para o diretório de trabalho
COPY . /app/

# Coleta arquivos estáticos
RUN python manage.py collectstatic --noinput

# Expõe a porta 8000 para permitir o acesso ao servidor Django
EXPOSE 8000

# Comando padrão para iniciar o servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
