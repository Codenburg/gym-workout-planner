#!/bin/sh
echo "Running entrypoint script..."

echo "Installing dependencies..."
uv pip install --system --no-cache-dir -r requirements.txt

echo "Running database migrations..."
python manage.py migrate --noinput

# Recolectar archivos estáticos (útil para producción)
# echo "Collecting static files..."
# python manage.py collectstatic --noinput

echo "Starting development server..."
python manage.py runserver 0.0.0.0:8000
