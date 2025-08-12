# Product Management System

A modern full-stack web application for managing products with a sleek, responsive interface and robust backend API.

![Project Structure](https://img.shields.io/badge/Stack-MERN-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-Express-blue)
![React](https://img.shields.io/badge/React-Vite-cyan)
![Database](https://img.shields.io/badge/Database-MongoDB-green)
![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-blueviolet)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Frontend Components](#frontend-components)
- [Development](#development)
- [Contributing](#contributing)

## 🎯 Overview

This project is a complete product management system that allows users to create, read, update, and delete products. It features a modern React frontend with Tailwind CSS styling and a Node.js/Express backend connected to MongoDB.

### Key Highlights

- **Modern UI**: Glassmorphism design with smooth animations and responsive layout
- **Real-time Updates**: Optimistic UI updates for better user experience
- **Toast Notifications**: User-friendly feedback system
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Custom Hooks**: Modern React patterns with custom hooks for API operations
- **Context API**: Centralized state management for notifications

## ✨ Features

### Frontend Features

- 🎨 **Modern Dashboard**: Beautiful product grid with card-based layout
- 📱 **Responsive Design**: Mobile-first approach with hamburger navigation
- ⚡ **Real-time CRUD**: Create, read, update, and delete products instantly
- 🖼️ **Image Preview**: Support for product images with fallback placeholders
- 🔔 **Toast Notifications**: Success/error feedback for all operations
- 📅 **Timestamps**: Creation and update timestamps for products
- 🎭 **Loading States**: Elegant loading spinners and skeleton screens
- ✏️ **Inline Editing**: Edit products directly from the dashboard

### Backend Features

- 🛡️ **RESTful API**: Clean API endpoints following REST conventions
- 🗄️ **MongoDB Integration**: Mongoose ODM for database operations
- ⚡ **Express.js**: Fast and minimal web framework
- 🔍 **Data Validation**: Comprehensive input validation
- 📊 **Error Handling**: Proper HTTP status codes and error messages
- 🕒 **Timestamps**: Automatic creation and update timestamps

## 🛠️ Tech Stack

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Environment**: dotenv
- **Development**: Nodemon

### Frontend

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x
- **Routing**: React Router DOM
- **Icons**: React Icons
- **HTTP Client**: Fetch API
- **State Management**: React Context API + Custom Hooks

### Development Tools

- **Linting**: ESLint
- **Code Formatting**: Prettier (via ESLint)
- **Hot Reload**: Vite HMR + React Fast Refresh
- **Proxy**: Vite dev server proxy

## 📁 Project Structure

```
backend/
├── backend/                 # Backend server code
│   ├── config/
│   │   └── db.js           # Database connection
│   ├── controllers/
│   │   └── product.controller.js  # Product CRUD operations
│   ├── models/
│   │   └── product.model.js      # Product schema
│   ├── routes/
│   │   └── product.route.js      # API routes
│   └── server.js           # Express server entry point
│
├── frontend/               # React frontend
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── ToastContainer.jsx
│   │   ├── context/        # Context providers
│   │   │   ├── toastContext.js
│   │   │   └── ToastContext.jsx
│   │   ├── hooks/          # Custom hooks
│   │   │   ├── useProducts.js
│   │   │   └── useToast.js
│   │   ├── pages/          # Page components
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── App.jsx         # Main app component
│   │   ├── index.css       # Global styles
│   │   └── main.jsx        # React entry point
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js      # Vite configuration with proxy
│
├── package.json            # Backend dependencies
└── README.md              # This file
```

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Step 1: Clone the Repository

```bash
git clone https://github.com/0tieno/backend.git
cd backend
```

### Step 2: Install Backend Dependencies

```bash
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### Step 4: Set Up Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/product-management
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/product-management
```

## ⚙️ Configuration

### Database Configuration

The database configuration is located in `backend/config/db.js`. Make sure your MongoDB instance is running and accessible.

### Frontend Proxy Configuration

The frontend is configured to proxy API requests to the backend. The proxy settings are in `frontend/vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
    },
  },
}
```

## 🎯 Usage

### Development Mode

#### Start the Backend Server

```bash
npm run dev
```

The backend server will start on `http://localhost:3000`

#### Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

### Production Build

#### Build the Frontend

```bash
cd frontend
npm run build
```

#### Start Production Backend

```bash
npm start
```

### Accessing the Application

1. Open your browser and navigate to `http://localhost:5173`
2. You'll see the modern dashboard interface
3. Use the navigation to switch between viewing products and creating new ones

## 📚 API Documentation

Base URL: `http://localhost:3000/api`

### Endpoints

#### Get All Products

```http
GET /api/products
```

**Response:**

```json
{
  "success": true,
  "products_data": [
    {
      "_id": "product_id",
      "name": "Product Name",
      "price": 29.99,
      "image": "https://example.com/image.jpg",
      "createdAt": "2025-01-12T10:30:00.000Z",
      "updatedAt": "2025-01-12T10:30:00.000Z"
    }
  ]
}
```

#### Create Product

```http
POST /api/products
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "Product Name",
  "price": 29.99,
  "image": "https://example.com/image.jpg"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "product_id",
    "name": "Product Name",
    "price": 29.99,
    "image": "https://example.com/image.jpg",
    "createdAt": "2025-01-12T10:30:00.000Z",
    "updatedAt": "2025-01-12T10:30:00.000Z"
  }
}
```

#### Update Product

```http
PUT /api/products/:id
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "Updated Product Name",
  "price": 39.99,
  "image": "https://example.com/new-image.jpg"
}
```

**Response:**

```json
{
  "success": true,
  "message": "product updated successfully",
  "updateProduct": {
    "_id": "product_id",
    "name": "Updated Product Name",
    "price": 39.99,
    "image": "https://example.com/new-image.jpg",
    "createdAt": "2025-01-12T10:30:00.000Z",
    "updatedAt": "2025-01-12T10:35:00.000Z"
  }
}
```

#### Delete Product

```http
DELETE /api/products/:id
```

**Response:**

```json
{
  "success": true,
  "message": "product deleted successfully"
}
```

### Error Responses

All endpoints return appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

Example error response:

```json
{
  "success": false,
  "message": "Please provide all fields"
}
```

## 🧩 Frontend Components

### Pages

#### HomePage (`src/pages/HomePage.jsx`)

- **Purpose**: Main dashboard displaying product grid
- **Features**:
  - Product listing with cards
  - Inline editing functionality
  - Delete confirmation
  - Loading and error states
  - Empty state with illustrations

#### CreatePage (`src/pages/CreatePage.jsx`)

- **Purpose**: Product creation form
- **Features**:
  - Form validation
  - Image preview
  - Toast notifications
  - Modern form styling

### Components

#### Navbar (`src/components/Navbar.jsx`)

- **Purpose**: Navigation component
- **Features**:
  - Responsive design
  - Mobile hamburger menu
  - Active route highlighting
  - Glassmorphism effects

#### Toast System

- **Toast.jsx**: Individual toast component
- **ToastContainer.jsx**: Container for managing multiple toasts
- **ToastContext.jsx**: Context provider for toast state

### Custom Hooks

#### useProducts (`src/hooks/useProducts.js`)

- **Purpose**: Data fetching and state management
- **Features**:
  - Product fetching with loading states
  - Error handling
  - State management for products list

#### useProductOperations (`src/hooks/useProducts.js`)

- **Purpose**: CRUD operations
- **Features**:
  - Create, update, delete operations
  - Error handling
  - Consistent API interface

#### useToast (`src/hooks/useToast.js`)

- **Purpose**: Toast notification management
- **Features**:
  - Success/error/info toast types
  - Auto-dismiss functionality
  - Queue management

### Context Providers

#### ToastContext

- **Purpose**: Global toast state management
- **Features**:
  - Centralized toast queue
  - Provider pattern for deep component access

## 🔧 Development

### Code Style

This project follows modern React patterns:

- Functional components with hooks
- Custom hooks for logic separation
- Context API for global state
- Modern CSS with Tailwind utility classes

### ESLint Configuration

The project uses ESLint with React-specific rules:

- React hooks rules enforcement
- React Refresh compatibility
- Modern JavaScript standards

### File Structure Guidelines

- **Components**: Reusable UI components
- **Pages**: Route-level components
- **Hooks**: Custom React hooks for logic
- **Context**: Global state management
- **Backend**: Server-side code organization

### Adding New Features

#### Frontend

1. Create components in appropriate directories
2. Use custom hooks for API calls
3. Implement proper loading and error states
4. Add toast notifications for user feedback

#### Backend

1. Define routes in `routes/` directory
2. Implement controllers in `controllers/`
3. Create models in `models/` if needed
4. Add proper error handling and validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -am 'Add new feature'`)
6. Push to the branch (`git push origin feature/new-feature`)
7. Create a Pull Request

### Development Guidelines

- Follow the existing code style
- Add appropriate comments for complex logic
- Ensure responsive design for new UI components
- Test all CRUD operations
- Maintain consistent error handling

## 🐛 Troubleshooting

### Common Issues

#### Database Connection Issues

```bash
# Check if MongoDB is running
mongosh

# Or check MongoDB Atlas connection string
```

#### Port Conflicts

- Backend runs on port 3000
- Frontend dev server runs on port 5173
- Change ports in respective configuration files if needed

#### Proxy Issues

- Ensure the proxy configuration in `vite.config.js` matches your backend port
- Clear browser cache if API calls fail

#### Module Resolution Issues

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure all file imports use correct paths

## 📚 Learning Notes

### Key Concepts Implemented

1. **Creating DB models with MongoDB**: Implemented using Mongoose schemas with validation and timestamps
2. **Routing with Express**: RESTful API routes with proper HTTP methods and status codes
3. **Handling requests and responses**: Comprehensive request validation and structured response formats
4. **Modern React Patterns**: Custom hooks, Context API, and component composition
5. **Responsive Design**: Mobile-first approach with Tailwind CSS
6. **State Management**: Optimistic updates and centralized toast notifications

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**0tieno**

- GitHub: [@0tieno](https://github.com/0tieno)
- Repository: [backend](https://github.com/0tieno/backend)

---

**Built with ❤️ using the MERN stack and modern web technologies**
