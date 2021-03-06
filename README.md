# Delivery API

Back-end project developed using principles such as SOLID, TDD and Clean Architecture.

Good practices have been implemented for unit testing and integration testing from an in-memory Postgres database instantiated through Docker.

## This app was build with

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-black.svg?style=for-the-badge&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Prisma](https://img.shields.io/badge/prisma-0C3249?style=for-the-badge&logo=prisma)
![Postgres](https://img.shields.io/badge/Postgres-316192?style=for-the-badge&logo=postgresql&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![GitHubActions](https://img.shields.io/badge/githubactions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

</div>

## Easy start app

Run the following commands in the terminal:
```bash
# install dependencies
npm install

# copy the .env file (and edit if needed like port and database url)
cp .env.example .env

# run the database migrations
npm run prisma:deploy

# build app and create dist folder
npm run build

# run the server in production mode
npm run start
```

Development commands:
```bash
# run the database migrations
npm run prisma:migrate

# run in development mode 
npm run dev

# run unit and integration tests (should have Docker and docker-compose installed)
npm run test
```

## Possible improvements / To-do

* Put all application to run in a docker-compose file
* Create a CI/CD pipeline to run tests and deploy the app
* Add pagination on open deliveries
* Implement a mapper on all deliveries lists
* Implement singleton on Prisma client
* Create more variation of tests
* Create a factory on integration tests
* Add a random database reset at `users/GlobalTeardown.ts` when doing integration tests
* Implement refresh token authentication security system
