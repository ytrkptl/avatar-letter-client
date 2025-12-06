# Multi-stage Dockerfile for React application with nginx

# Development stage
FROM node:22-alpine AS development
# Enable corepack (built-in tool to manage pnpm/yarn)
RUN corepack enable
WORKDIR /app
COPY package*.json ./
# Use pnpm to install
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["pnpm", "run", "dev"]

# Build stage
FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .

# Accept build argument for API URL
ARG VITE_API_URL
# Set environment variable during build
ENV VITE_API_URL=$VITE_API_URL

RUN pnpm run build

# Production stage
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]