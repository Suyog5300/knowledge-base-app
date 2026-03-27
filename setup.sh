#!/bin/bash

# ============================================
# Knowledge Base UI - Project Setup Script
# ============================================

# Step 3: Install Tailwind CSS v3 + dependencies
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

# Step 4: Install additional packages
npm install lucide-react

# Step 5: Create folder structure
echo "📁 Creating folder structure..."

mkdir -p src/components/Sidebar
mkdir -p src/components/Header
mkdir -p src/components/KnowledgeBase
mkdir -p src/components/Modal
mkdir -p src/components/ui
mkdir -p src/data
mkdir -p src/hooks
mkdir -p src/assets

echo "✅ Project setup complete!"
echo ""
echo "📝 Next steps:"
echo "  cd knowledge-base-app"
echo "  npm run dev"
