# Dockerized Mororepo Application

This application is a start kit for Node.js, it includes some pre-configured techs:

## Content

1. Monorepo with Lerna
2. Yarn Workspaces (yarn required)
3. Eslint
4. Typescript
5. Docker and Docker Compose
6. JEST
7. Typescript paths
8. Prettier (Eslint integration)
9. MySQL database

## Setup

To start it, you can use "yarn" command on your terminal

```bash
yarn
```

It's gonna intall all needed dependencies according to packages on "packages" folder with yarn workspaces.

After that, run on your terminal:

```bash
docker-compose up -d --build
```

It's gonna build the images and run the docker containers according to "Dockerfile" and "docker-compose" files (this step requires you to install docker).

At last, you can go to "localhost:3000" or "localhost:3000/dbTest".

**Be sure to edit the database configs on "packages/backend/src/server.ts" with container IP, password, database and port**