#!/bin/bash
# Start backend API service for production (frontend deployed separately on Coolify)
docker compose up backend-api --build -d
