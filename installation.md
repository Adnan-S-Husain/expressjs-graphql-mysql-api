# Installation of Project

## Step 1: Fork
Clone/fork the repository

## Step 2: NodeJs
Install [NodeJs](https://nodejs.org/en/download/) on your device

## Step 3: Docker
Install [Docker](https://www.docker.com/products/docker-desktop/). You can skip if you have local Mysql or Postgresql database already setup and make sure to add the database URI to the .env file.

## Step 4: Yarn
Install Yarn by `npm install yarn -g`

## Step 5: Creating `.env` file:
Create a `.env` file in the root folder of the project, copy and paste the `.env.sample` into the .env file.

DATABASE_URL - Your Mysql or Postgresql database `URI`. If you are using docker, use the uri from .env.sample.

ACCESS_TOKEN_SECRET - Generate the token using `openssl rand -hex 32` command in your terminal and copy and past in the .env file.

REFRESH_TOKEN_SECRET - Repeat the above process to generate another token.


## Commands in the project directory:
Run these in order-
#### `yarn dockerup`

Creates the docker network for `mysql` data base along with `phpmyadmin`. Access phpmyadmin at <a href="http://localhost:8080/">localhost:8080</a>\
Skip docker command if database URI is available.

#### `yarn install`

Runs the yarn package manager to install all the dependencies of the project. If yarn is not pre-installed, install it with `npm install yarn`

#### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

Optional-
#### `yarn build`

Compile the typescript files in the project directory into javascript code and places it inside dist folder.

#### `yarn start`

Starts the server.js file, created by the build command, in production mode.

#### `yarn stop`

Stops the production server if any at all is running.

#### `yarn dockerdown`

Shuts down the running docker containers.
