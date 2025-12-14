#!/bin/bash
# Start unified production service (serves both frontend and API)
docker compose up backend-api-prod --build -d
