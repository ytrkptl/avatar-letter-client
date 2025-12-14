@echo off
REM Start production environment locally for testing
docker compose --profile prod-local up --build
