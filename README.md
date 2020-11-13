# Node API

After pulling the repository please add the `.env` file in the root directory based on `.env.example` with the correct environment variables.

1) `npm i` for install node modules

2) `npm run start:dev` for development environment

3) `npm run start:prod` for production environment

4) `npm run build` for build codes

The API will be run on port 3000. For sending a response to the API use the following URL

Local [http://localhost:3000](http://localhost:3000)

The documentation of API You can see
Local [http://localhost:3000/api-doc](http://localhost:3000/api-doc)

## Deploying and run in a docker container

1) Clone repository

2) Commands to run
    `make up ENV=dev` for dev environment

    `make up ENV=prod` for prod environment

3) Commands to disable
    `make down ENV=dev` for dev environment

    `make down ENV=prod` for prod environment

4) For connecting to containers
    `make exec_api ENV=dev` or `docker exec -it node-api-dev  /bin/bash`

   `make exec_api ENV=prod` or `docker exec -it node-api-prod  /bin/bash`

## For rebuild container after changes in the repository

1) `git fetch`

2) `git pull`

3) `make up ENV=dev` for dev environment
4) `make up ENV=prod` for prod environment
