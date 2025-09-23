# --- Base Stage ---
# Sets up the basic environment with Node.js
FROM node:18-alpine AS base
WORKDIR /app

# --- Frontend Builder ---
# Builds the cvi-frontend application
FROM base AS cvi-frontend-builder
WORKDIR /app
COPY cvi-frontend/package*.json ./cvi-frontend/
RUN cd cvi-frontend && npm install
COPY cvi-frontend/ ./cvi-frontend/
RUN cd cvi-frontend && npm run build

# --- Admin Builder ---
# Builds the cvi-admin application
FROM base AS cvi-admin-builder
WORKDIR /app
COPY cvi-admin/package*.json ./cvi-admin/
RUN cd cvi-admin && npm install
COPY cvi-admin/ ./cvi-admin/
RUN cd cvi-admin && npm run build

# --- Backend Builder ---
# Builds the cvi-backend application
FROM base AS cvi-backend-builder
WORKDIR /app
COPY cvi-backend/package*.json ./cvi-backend/
RUN cd cvi-backend && npm install
COPY cvi-backend/ ./cvi-backend/
RUN cd cvi-backend && npm run build

# --- Final Production Image ---
# This is the image that will be deployed.
# It copies the build artifacts from the builder stages.
FROM node:18-alpine
WORKDIR /app

# Copy all project artifacts
COPY --from=cvi-frontend-builder /app/cvi-frontend/ /app/cvi-frontend/
COPY --from=cvi-admin-builder /app/cvi-admin/ /app/cvi-admin/
COPY --from=cvi-backend-builder /app/cvi-backend/ /app/cvi-backend/

# Install production dependencies for each project
RUN cd /app/cvi-frontend && npm install --production
RUN cd /app/cvi-admin && npm install --production
RUN cd /app/cvi-backend && npm install --production

# Expose the ports for the applications
EXPOSE 3000 3001 3002

# The command to start the services will be handled by docker-compose
CMD ["echo", "Use docker-compose to start the services."]
