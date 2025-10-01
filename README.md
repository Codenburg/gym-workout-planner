# Gym Workout Planner

## Estructura del proyecto
backend/
frontend/

# Backend - Configuración del entorno local

Para ejecutar la aplicación localmente, necesitas un archivo `.env` en la raíz del proyecto. **No incluyas datos reales ni secretos de producción.**

## Ejemplo de `.env` para desarrollo

```env
# Django
DJANGO_SECRET_KEY=django-insecure-placeholder
DJANGO_DEBUG=True

# Base de datos (SQLite por defecto)
DATABASE_URL=sqlite:///db.sqlite3

# Otros servicios (usar valores ficticios)
API_KEY=placeholder_api_key
```

## Pasos para ejecutar el Backend

1. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```
2. Aplica las migraciones:
   ```bash
   python manage.py migrate
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   python manage.py runserver
   ```