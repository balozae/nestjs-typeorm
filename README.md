## Starter Backend NestJS TypeORM, Postgres

#### Step 0

Copy `.env.example` file to `.env` on the root folder.
Run `yarn install` - install all dependencies.

#### Step 1 - Setup db

1. `yarn typeorm:migration:run` - create tables
2. `yarn db:seed`

#### How to start dev?

2. `yarn start:dev`

#### Swagger? Where can I find API Documentation?

Yes, goto [http://localhost:4000/docs/](http://localhost:4000/docs/) (only for dev).
