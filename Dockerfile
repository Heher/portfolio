# # syntax = docker/dockerfile:1

# # Adjust NODE_VERSION as desired
# ARG NODE_VERSION=25.2.1
# FROM node:${NODE_VERSION}-slim AS base

# LABEL fly_launch_runtime="Node.js"

# # Node.js app lives here
# WORKDIR /app

# # Set production environment
# ENV NODE_ENV="production"

# # Install pnpm
# ARG PNPM_VERSION=10.28.0
# RUN npm install -g pnpm@$PNPM_VERSION


# # Throw-away build stage to reduce size of final image
# FROM base AS build

# # Unset NODE_ENV for build stage to ensure devDependencies are installed
# ENV NODE_ENV=

# # Install packages needed to build node modules
# RUN apt-get update -qq && \
#     apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# # Copy workspace configuration and package files
# COPY pnpm-workspace.yaml ./
# COPY package.json pnpm-lock.yaml ./

# # Install node modules (including devDependencies needed for build)
# RUN pnpm install --frozen-lockfile --prod=false

# # Copy application code
# COPY . .

# # Build application
# RUN pnpm run build

# # Remove development dependencies
# RUN pnpm prune --prod


# # Final stage for app image
# FROM base

# # Copy built application
# COPY --from=build /app /app

# # Start the server by default, this can be overwritten at runtime
# EXPOSE 3000
# CMD [ "pnpm", "run", "start" ]








FROM node:24-alpine AS development-dependencies-env
# Install pnpm
ARG PNPM_VERSION=10.28.0
RUN npm install -g pnpm@$PNPM_VERSION

COPY . /app
WORKDIR /app
RUN pnpm install --frozen-lockfile

FROM node:24-alpine AS production-dependencies-env
# Install pnpm
ARG PNPM_VERSION=10.28.0
RUN npm install -g pnpm@$PNPM_VERSION

COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN pnpm install --frozen-lockfile --prod

FROM node:24-alpine AS build-env
# Install pnpm
ARG PNPM_VERSION=10.28.0
RUN npm install -g pnpm@$PNPM_VERSION

COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN pnpm run build

FROM node:24-alpine
# Install pnpm
ARG PNPM_VERSION=10.28.0
RUN npm install -g pnpm@$PNPM_VERSION

COPY ./package.json pnpm-lock.yaml server.js /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["pnpm", "run", "start"]

