#!/bin/bash

# Emergency deployment fix script for chunk mismatch issues
# Run this on the server when facing 400 Bad Request for static chunks

set -e

echo "🚨 Emergency deployment fix for chunk mismatch..."

APP_NAME="cvi-admin"
APP_DIR="/var/www/cloudvortexi_usr/data/www/sscviadmin.cloudvortexinnovation.com"

cd "$APP_DIR"

echo "⏹️ Stopping application..."
pm2 stop $APP_NAME 2>/dev/null || echo "PM2 process not running"

echo "🗑️ Removing .next directory..."
rm -rf .next

echo "🧹 Clearing all caches..."
npm cache clean --force
npx next cache clean 2>/dev/null || echo "Next.js cache clean not available"

echo "🔧 Installing/updating dependencies..."
npm install

echo "📝 Ensuring production environment..."
cat > .env.local << 'EOF'
NEXT_PUBLIC_API_URL=http://api.cloudvortexinnovation.com
EOF

echo "🔨 Rebuilding application..."
npm run build

echo "✅ Verifying build..."
if [ ! -d ".next" ] || [ ! -f ".next/BUILD_ID" ]; then
    echo "❌ Build verification failed"
    exit 1
fi

echo "🚀 Starting application..."
# Kill any process using port 3001
lsof -ti:3001 | xargs kill -9 2>/dev/null || echo "Port 3001 is free"

PORT=3001 pm2 start npm --name "$APP_NAME" -- start

sleep 5

if pm2 list | grep -q "$APP_NAME.*online"; then
    echo "✅ Application started successfully!"
    echo "🌐 Check https://sscviadmin.cloudvortexinnovation.com"
else
    echo "❌ Failed to start application"
    pm2 logs "$APP_NAME" --lines 20
    exit 1
fi

pm2 save
echo "💾 PM2 configuration saved"
echo "🎉 Emergency fix completed!"