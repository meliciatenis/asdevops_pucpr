FROM python:latest

RUN mkdir /app
WORKDIR /app

COPY script.py ./

CMD ["python", "script.py"]