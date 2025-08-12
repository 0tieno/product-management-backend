# Deployment Guide

This guide covers different deployment strategies for your Product Management System.

## Table of Contents

- [Deployment Guide](#deployment-guide)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Environment Setup](#environment-setup)
    - [1. Create Production Environment File](#1-create-production-environment-file)
    - [2. Update Package.json Scripts](#2-update-packagejson-scripts)
  - [Local Production Build](#local-production-build)
    - [1. Install Dependencies](#1-install-dependencies)
    - [2. Build Frontend](#2-build-frontend)
    - [3. Start Production Server](#3-start-production-server)
  - [Docker Deployment](#docker-deployment)
    - [1. Create Dockerfile](#1-create-dockerfile)
    - [2. Create .dockerignore](#2-create-dockerignore)
    - [3. Build and Run Docker Image](#3-build-and-run-docker-image)

## Prerequisites

Before deploying, ensure you have:

- Node.js 18+ installed
- MongoDB instance (local or cloud)
- Git for version control
- Domain name (for production deployment)

## Environment Setup

### 1. Create Production Environment File

Create `.env` in the root directory:

```env
# Server Configuration
NODE_ENV=production
PORT=3000

# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/product-management

# Optional: Additional configurations
CORS_ORIGIN=https://yourdomain.com
```

### 2. Update Package.json Scripts

Add production scripts to your root `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon backend/server.js",
    "start": "node backend/server.js",
    "build": "cd frontend && npm run build",
    "postinstall": "cd frontend && npm install"
  }
}
```

## Local Production Build

### 1. Install Dependencies

```bash
npm install
cd frontend && npm install && cd ..
```

### 2. Build Frontend

```bash
cd frontend
npm run build
cd ..
```

### 3. Start Production Server

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Docker Deployment

### 1. Create Dockerfile

Create `Dockerfile` in the root directory:

```dockerfile
# Multi-stage build
FROM node:18-alpine AS frontend-build

# Build frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Backend stage
FROM node:18-alpine AS backend

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY backend/ ./backend/
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

CMD ["node", "backend/server.js"]
```

### 2. Create .dockerignore

```dockerignore
node_modules
frontend/node_modules
.env
.git
.gitignore
README.md
Dockerfile
.dockerignore
npm-debug.log
```

### 3. Build and Run Docker Image

```bash
# Build image
docker build -t product-management .

# Run container
docker run -p 3000:3000 -e MONGO_URI=your_mongodb_uri product-management
```