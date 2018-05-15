FROM python:latest

WORKDIR /opt/test
COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

ENTRYPOINT sleep 5s; pytest --tb=line
