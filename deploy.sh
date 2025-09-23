#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Helper Functions ---
show_help() {
  echo "Usage: ./deploy.sh [service...]"
  echo
  echo "Deploys the specified services using Docker Compose."
  echo
  echo "Services:"
  echo "  frontend       Deploy the cvi-frontend service"
  echo "  admin          Deploy the cvi-admin service"
  echo "  backend        Deploy the cvi-backend service"
  echo "  all            Deploy all services"
  echo
  echo "Options:"
  echo "  --help         Show this help message"
  echo
  echo "Example:"
  echo "  ./deploy.sh frontend admin"
}

# --- Main Script ---
if [ ! -f .env ]; then
  echo "Error: .env file not found."
  echo "Please copy .env.example to .env and fill in the required values."
  exit 1
fi

if [ "$1" == "--help" ]; then
  show_help
  exit 0
fi

if [ "$#" -eq 0 ]; then
  show_help
  exit 1
fi

services=""
for arg in "$@"; do
  case "$arg" in
    frontend|admin|backend)
      services="$services $arg"
      ;;
    all)
      services="frontend admin backend"
      ;;
    *)
      echo "Error: Invalid service '$arg'"
      show_help
      exit 1
      ;;
  esac
done

echo "Starting deployment for services: $services"

# Build the image
docker-compose build

# Start the services
docker-compose up -d $services

echo "Deployment successful!"
