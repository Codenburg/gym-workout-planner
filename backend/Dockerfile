FROM python:3.13-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /backend

RUN apt-get update \
 && apt-get install -y curl libpq-dev gcc \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

COPY requirements.txt .

RUN uv pip install --no-cache-dir -r requirements.txt --system

COPY . .

RUN sed -i 's/\r$//' /backend/start.sh && chmod +x /backend/start.sh

EXPOSE 8000

CMD ["/backend/start.sh"]
