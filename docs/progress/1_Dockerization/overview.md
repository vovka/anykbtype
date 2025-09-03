# Step 1: Containerization

## Purpose
To create a consistent and reproducible development and production environment for the Dilemma Keyboard Typing Practice application using Docker.

## Files Created
- [`Dockerfile`](/home/vovka/dev/anykbtype/Dockerfile): Defines the multi-stage build process for the application. It includes stages for development (`dev`), building the application (`build`), and production (`prod`).
- [`docker-compose.yml`](/home/vovka/dev/anykbtype/docker-compose.yml): A configuration file for Docker Compose that defines the services, networks, and volumes for the application. It includes services for both development and production environments.

## Dockerfile Breakdown

### Development Stage (`dev`)
- Uses the `node:20-alpine` base image.
- Sets the working directory to `/app`.
- Copies `package.json` and `package-lock.json` and installs dependencies to leverage Docker's layer caching.
- Copies the rest of the application code.
- Exposes port `5173` for the Vite development server.
- The default command is `npm run dev` to start the Vite server.

### Build Stage (`build`)
- Uses the `dev` stage as a base.
- Runs `npm run build` to create a production build of the React application.

### Production Stage (`prod`)
- Uses the `nginx:stable-alpine` base image for a lightweight web server.
- Copies the production-ready static files from the `build` stage into the Nginx web root.
- Exposes port `80`.
- The default command is `nginx -g "daemon off;"` to start the Nginx server.

## Docker Compose Breakdown

### `dev` Service
- Builds the image using the `dev` target in the `Dockerfile`.
- Maps port `5173` on the host to `5173` in the container.
- Mounts the current directory to `/app` in the container to allow for hot-reloading.
- Uses a named volume for `node_modules` to prevent it from being overwritten by the local `node_modules` directory.
- Sets `CHOKIDAR_USEPOLLING=true` to enable file watching in some environments.

### `prod` Service
- Builds the image using the `prod` target in the `Dockerfile`.
- Maps port `8080` on the host to `80` in the container.

## How to Use
- To start the development server: `docker-compose up dev`
- To build and start the production server: `docker-compose up prod`
