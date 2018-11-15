SOURCE=$(shell find ./ -type f -exclude test)
TEST_SOURCE=$(shell find ./test -type f)

all: down build up

down:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml down

clean: down
	docker-compose -f docker-compose.yml -f docker-compose.test.yml rm -v

build: $(SOURCE)
	docker-compose -f docker-compose.yml -f docker-compose.test.yml build

up: build
	docker-compose -f docker-compose.yml up

test: clean down build $(TEST_SOURCE)
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up --exit-code-from test
