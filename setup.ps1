# setup.ps1

# 创建主要目录结构
Write-Host "创建目录结构..."

# 创建 src 目录及其子目录
New-Item -ItemType Directory -Force -Path src/components/common
New-Item -ItemType Directory -Force -Path src/components/layout
New-Item -ItemType Directory -Force -Path src/components/product
New-Item -ItemType Directory -Force -Path src/components/cart
New-Item -ItemType Directory -Force -Path src/components/auth
New-Item -ItemType Directory -Force -Path src/pages
New-Item -ItemType Directory -Force -Path src/store/slices
New-Item -ItemType Directory -Force -Path src/services
New-Item -ItemType Directory -Force -Path src/hooks
New-Item -ItemType Directory -Force -Path src/utils
New-Item -ItemType Directory -Force -Path src/styles

# 创建所有文件
Write-Host "创建文件..."

# 创建主入口文件
New-Item -ItemType File -Force -Path src/App.jsx
New-Item -ItemType File -Force -Path src/main.jsx
New-Item -ItemType File -Force -Path src/vite-env.d.ts

# 创建通用组件
"Button", "Input", "Modal", "Loading" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/components/common/$_.jsx"
}

# 创建布局组件
"Header", "Footer", "Sidebar" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/components/layout/$_.jsx"
}

# 创建产品相关组件
"ProductCard", "ProductList", "ProductDetail" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/components/product/$_.jsx"
}

# 创建购物车组件
"CartItem", "CartSummary" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/components/cart/$_.jsx"
}

# 创建认证组件
"LoginForm", "RegisterForm" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/components/auth/$_.jsx"
}

# 创建页面组件
"Home", "Products", "ProductDetail", "Cart", "Checkout", "Login", "Register", "Account" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/pages/$_.jsx"
}

# 创建 store 文件
New-Item -ItemType File -Force -Path src/store/index.js
"cartSlice", "authSlice", "productSlice" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/store/slices/$_.js"
}

# 创建服务文件
"api", "auth", "products" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/services/$_.js"
}

# 创建 hooks 文件
"useAuth", "useCart", "useProducts" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/hooks/$_.js"
}

# 创建工具文件
"formatter", "validator" | ForEach-Object {
    New-Item -ItemType File -Force -Path "src/utils/$_.js"
}

# 创建样式文件
New-Item -ItemType File -Force -Path src/styles/index.css

Write-Host "项目结构创建完成！"

# 显示创建的目录结构
Write-Host "显示目录结构："
tree src/