FROM python:3.10-slim

WORKDIR /django-app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["celery", "-A", "Arca", "worker", "--loglevel=info"]
