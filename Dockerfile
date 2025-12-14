# Multi-stage Dockerfile: Development + Production (Frontend + API)

# Stage 1: Development environment with hot-reload
FROM node:22-alpine AS development
RUN corepack enable
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["pnpm", "run", "dev"]

# Stage 2: Build the React frontend for production
FROM node:22-alpine AS frontend-build
RUN corepack enable
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Stage 2: Production nginx server
FROM nginx:alpine AS production

# Remove default nginx configuration
RUN rm /etc/nginx/nginx.conf

# Copy custom nginx configuration
COPY nginx-api.conf /etc/nginx/nginx.conf

# Copy built frontend from build stage
COPY --from=frontend-build /app/dist /usr/share/nginx/html

# Copy public folder with all avatar images
COPY public /usr/share/nginx/html/public

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
