#!/bin/sh
echo "Running entrypoint script..."

echo "Installing dependencies..."
uv pip install --system --no-cache-dir -r requirements.txt

echo "Running database migrations..."
python manage.py migrate --noinput


echo "Checking Superuser..."
echo "Checking superuser..."
python manage.py shell -c "import os, environ
from django.conf import settings
from django.contrib.auth import get_user_model
env = environ.Env()
env.read_env(os.path.join(settings.BASE_DIR, '.env'))
User = get_user_model()
username = env('DJANGO_SUPERUSER_USERNAME')
password = env('DJANGO_SUPERUSER_PASSWORD')
if not User.objects.filter(username=username).exists():
    print('Creating superuser...')
    User.objects.create_superuser(username=username, email='', password=password)
else:
    print('Superuser already exists.')"

# Recolectar archivos estáticos (útil para producción)
# echo "Collecting static files..."
# python manage.py collectstatic --noinput

echo "Starting development server..."
python manage.py runserver 0.0.0.0:8000