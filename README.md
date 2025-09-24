# Cloud Vertex Innovation Platform

A complete website platform for Cloud Vertex Innovation with a public website, admin panel, and backend services.

## What This Project Does

### Public Website (cvi-frontend)
- Shows visitors our products and services
- Lets people learn about our company
- Has a contact form for inquiries
- Displays our portfolio and team

### Admin Panel (cvi-admin)
- Private area for our team
- Update website content
- Manage products and services
- Handle administrative tasks

### Backend Services (cvi-backend)
- Stores and manages all data
- Handles user accounts and security
- Processes requests from website and admin panel

## How to Run Locally

To test the project on your computer:

1. **Install the required packages** for each part:
   - Go to `cvi-frontend` folder and run `npm install`
   - Go to `cvi-admin` folder and run `npm install`
   - Go to `cvi-backend` folder and run `npm install`

2. **Start each service**:
   - Backend: Run `npm run start:dev` in `cvi-backend` folder (available on port 3002)
   - Admin panel: Run `npm run dev` in `cvi-admin` folder (available on port 3001)
   - Main website: Run `npm run dev` in `cvi-frontend` folder (available on port 3000)

3. **Open in browser**:
   - Main website: http://localhost:3000
   - Admin panel: http://localhost:3001
   - API documentation: http://localhost:3002/api

## Deploy to Server

This project deploys automatically using Docker when you push code changes.

### What You Need First

- A server with Docker already installed
- SSH access to the server
- GitHub repository secrets configured (go to Settings → Secrets and variables → Actions)

### Required GitHub Secrets

Add these secrets to your GitHub repository:
```
CONTABO_SSH_HOST     = your-server-ip
CONTABO_SSH_USER     = your-ssh-username
CONTABO_SSH_PASS     = your-ssh-password
PERSONAL_ACCESS_TOKEN= your-github-token
DB_HOST             = your-database-host
DB_USER             = your-database-username
DB_PASS             = your-database-password
DB_NAME             = your-database-name
JWT_SECRET          = your-security-secret
DISCORD_WEBHOOK_URL = your-discord-webhook (optional)
```

### How Deployment Works

**Automatic**: Push your code to the `prod` branch and deployment starts automatically.

**Manual**: Go to GitHub Actions → "Deploy CVI with Docker" → Run workflow, then choose what to deploy.

### What Gets Deployed

- `frontend` - Main website
- `admin` - Admin panel
- `backend` - API services
- `all` - Everything together

### Production Access

After deployment, your services will be available at:
- Main website: https://cloudvortexinnovation.com
- Admin panel: https://sscviadmin.cloudvortexinnovation.com
- API: https://api.cloudvortexinnovation.com

## Get Help

For questions or support:
- Email: cloudvertexinnovation@gmail.com
- Technical Project Manager: Naimur Rahman
