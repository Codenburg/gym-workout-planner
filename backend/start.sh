#!/bin/sh

echo "Running entrypoint script..."

# Esperar a que la base de datos esté lista
echo "Waiting for database..."
python manage.py wait_for_db || sleep 5

echo "Running database migrations..."
python manage.py migrate --noinput

# Recolectar archivos estáticos (útil para producción)
# echo "Collecting static files..."
# python manage.py collectstatic --noinput

echo "Starting development server..."
python manage.py runserver 0.0.0.0:8000