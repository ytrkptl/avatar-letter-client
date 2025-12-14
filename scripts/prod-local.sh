#!/bin/bash
# Test unified production service locally (serves both frontend and API on port 80)
docker compose --profile prod up --build
