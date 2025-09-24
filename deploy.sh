#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to deploy services
deploy_services() {
    local services="$1"

    print_status "Starting deployment of services: $services"

    # Create .env file if it doesn't exist (should be created by workflow)
    if [ ! -f ".env" ]; then
        print_warning ".env file not found. Please ensure environment variables are set."
    fi

    # Stop existing containers for the services being deployed
    print_status "Stopping existing containers..."

    if [ "$services" == "all" ]; then
        docker-compose --profile "*" down || print_warning "No existing containers to stop"
    else
        # Convert comma/space separated services to array
        IFS=', ' read -r -a service_array <<< "$services"

        for service in "${service_array[@]}"; do
            case $service in
                frontend)
                    docker-compose --profile frontend down || true
                    ;;
                admin)
                    docker-compose --profile admin down || true
                    ;;
                backend)
                    docker-compose --profile backend down || true
                    ;;
                *)
                    print_error "Unknown service: $service"
                    exit 1
                    ;;
            esac
        done
    fi

    # Build and start services
    if [ "$services" == "all" ]; then
        print_status "Building and starting all services..."
        docker-compose --profile "*" up --build -d
    else
        # Convert comma/space separated services to array
        IFS=', ' read -r -a service_array <<< "$services"

        for service in "${service_array[@]}"; do
            print_status "Building and starting $service service..."
            docker-compose --profile "$service" up --build -d
        done
    fi

    print_success "Deployment completed successfully!"

    # Show status
    print_status "Service Status:"
    docker-compose --profile "*" ps
}

# Main script logic
if [ $# -eq 0 ]; then
    print_error "Usage: $0 <services>"
    print_error "Services: all, frontend, admin, backend (comma-separated)"
    exit 1
fi

services="$1"

# Validate services
if [ "$services" == "all" ]; then
    deploy_services "all"
else
    # Check if services are valid
    IFS=', ' read -r -a service_array <<< "$services"
    for service in "${service_array[@]}"; do
        case $service in
            frontend|admin|backend)
                ;;
            *)
                print_error "Invalid service: $service"
                print_error "Valid services: frontend, admin, backend"
                exit 1
                ;;
        esac
    done
    deploy_services "$services"
fi
