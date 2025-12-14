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

# Stage 3: Production Node.js server (Express + Frontend)
FROM node:22-alpine AS production

ENV NODE_ENV=production
WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable

# Install production dependencies
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Copy API code
COPY api ./api

# Copy public folder with avatars (kept at root level for consistency)
COPY public ./public

# Copy built frontend from build stage
COPY --from=frontend-build /app/dist ./dist

# Expose port 8080
EXPOSE 8080

# Start Express server
CMD ["node", "api/start.js"]
