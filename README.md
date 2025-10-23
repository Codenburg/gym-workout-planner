## Features - TODO:
**Panel del entrenador:**
-Crear y gestionar rutinas (nombre, objetivo, duración, dificultad).  ❌
-Asignar rutinas a cada cliente. ❌
-Generar automáticamente un QR que enlace a la rutina. ❌
-Posibilidad de clonar o versionar rutinas según progreso ❌

**Entrega por QR**
El QR puede dirigir a:
- Una página web privada con la rutina.❌
- Un PDF descargable con los ejercicios, series, repeticiones y notas.❌
- Opcional: Una app web responsive con trackeo de avance (check de ejercicios completados).

## Estructura del proyecto
backend/
frontend/

# Develop

A continucion dejo una guia para desarrolladores que quieran colaborar.
**En lo posible usar Docker**, configure el proyecto para que corra sin problemas en un Docker Compose con Volumenes.

## Backend - Configuración del entorno local
Para ejecutar la aplicación localmente, necesitas un archivo `.env`. **No incluyas datos reales ni secretos de producción.**
He dejado una plantilla del `.env` para desarrollo llamada `.env.example`. 
## Pasos para ejecutar el Backend
- Instala python 3.13
- Instala Postgress
   1.Elige componentes (deja los predeterminados, incluye pgAdmin).
   2.Define la contraseña del usuario postgres (administrador de la DB).
   3.Selecciona puerto 5432 (predeterminado).
   4.Asegurate que este corriendo:
   ```
   net start postgresql
   ```
   Conectar con pgAdmin o psql
  ```
  psql -U postgres -h localhost
   ```
Te pedirá la contraseña que definiste durante la instalación.

5.Crear base de datos y usuario para Django
Desde psql:
```
CREATE DATABASE gymdb;
CREATE USER gymuser WITH PASSWORD 'tu_password';
GRANT ALL PRIVILEGES ON DATABASE gymdb TO gymuser
```
6.Configurar `.env` con los valores que asignaste 

**En tu terminal:**
Crea tu entorno virtual y activalo.
- Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```
- Toma las migraciones:
   ```bash
   python manage.py makemigrations
   ```
- Ejecuta el script:
   ```bash
   start.sh
   ```
