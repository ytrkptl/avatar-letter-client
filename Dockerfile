# Build Stage
FROM node:24-alpine AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copy client source
COPY client ./client

# Build client
WORKDIR /app/client
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Production Stage
FROM node:24-alpine AS production

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Install server dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Copy server source code
# Copy server source code
COPY server.js ./
COPY start.js ./
COPY controllers ./controllers
COPY routes ./routes
COPY validators ./validators

# Step 1: Copy original public directory (contains letters, favicon, etc.)
COPY public ./public

# Step 2: Copy built client assets (merging/overwriting)
# Vite outputted to ../public in the build stage, which is /app/public
COPY --from=builder /app/public ./public

# Expose the server port
EXPOSE 5001

# Start the server with directory listing for debugging
CMD ["sh", "-c", "ls -la /app && node start.js"]
