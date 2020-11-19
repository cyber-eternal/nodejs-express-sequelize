ENV :=  $(or ${ENV},dev)
ifndef ENV
  $(error The ENV variable is missing.)
endif

COMPOSE_FILE_PATH := -f docker-compose.$(ENV).yml

up:
	@docker-compose up -d --build
down:
	@docker-compose down
exec_api:
	@docker exec -it node-api-$(ENV)  /bin/bash
exec_db:
	@docker exec -it mysql-$(ENV)  /bin/bash
ps:
	@docker-compose ps