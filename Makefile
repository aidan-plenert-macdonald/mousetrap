all: down build up

down:
	docker-compose down

build:
	docker-compose down

up:
	docker-compose up

