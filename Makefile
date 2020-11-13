ENV :=  $(or ${ENV},dev)
ifndef ENV
  $(error The ENV variable is missing.)
endif

COMPOSE_FILE_PATH := -f docker-compose.$(ENV).yml

up:
	@docker-compose -f docker-compose.yml $(COMPOSE_FILE_PATH) up -d --build
down:
	@docker-compose -f docker-compose.yml $(COMPOSE_FILE_PATH) down
exec_api:
	@docker exec -it node-api-$(ENV)  /bin/bash
ps:
	@docker-compose ps