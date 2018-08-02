FROM python:latest

WORKDIR /opt/test
COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .
RUN flake8


ENTRYPOINT sleep 5s; pytest --tb=line
