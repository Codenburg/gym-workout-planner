FROM python:3.13-slim-bookworm
# Prevents Python from writing pyc files to disk
ENV PYTHONDONTWRITEBYTECODE=1
#Prevents Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED=1 

RUN mkdir /backend

WORKDIR /backend

RUN apt-get update && apt-get install -y curl libpq-dev gcc && apt-get clean

# Install uv and uvx
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Set environment variables 

# Upgrade pip
RUN pip install --upgrade pip 

# Copy the Django project  and install dependencies
COPY requirements.txt .

# run this command to install all dependencies 
RUN uv pip install --no-cache-dir -r requirements.txt --system  

# Copy the Django project to the container
COPY . .

# Expose the Django port
EXPOSE 8000

# Run Django’s development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]