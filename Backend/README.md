# Uber Backend API

A Node.js backend API for Uber-like ride-sharing application with user authentication, JWT-based authorization, and cookie management.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Running the Server](#running-the-server)
- [Key Features](#key-features)
- [Dependencies](#dependencies)

---

## 📌 Project Overview

This is a backend REST API for an Uber-like ride-sharing application. It provides:

- **User Authentication** - Register and login functionality with secure password hashing
- **JWT Authorization** - Token-based authentication for protected routes
- **User Management** - User profiles and account management
- **Cookie Management** - Secure cookie handling for sessions
- **MongoDB Integration** - NoSQL database for data persistence
- **Input Validation** - Request validation using express-validator

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | - | JavaScript runtime |
| **Express.js** | ^5.2.1 | Web framework |
| **MongoDB** | - | NoSQL Database |
| **Mongoose** | ^9.5.0 | MongoDB ODM |
| **JWT** | ^9.0.3 | Authentication tokens |
| **Bcrypt** | ^6.0.0 | Password hashing |
| **CORS** | ^2.8.6 | Cross-origin requests |
| **Cookie Parser** | ^1.4.7 | Cookie middleware |
| **dotenv** | ^17.4.2 | Environment variables |
| **Express Validator** | ^7.3.2 | Request validation |

---

## 📦 Prerequisites

Before running the project, make sure you have:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (local or Atlas connection string)

---

## 🚀 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npm list
   ```

---

## ⚙️ Environment Setup

Create a `.env` file in the Backend directory with the following variables:

```env
# Server Configuration
PORT=5000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/uber_db
# OR use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/uber_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here

# Other Configuration (if needed)
NODE_ENV=development
```

### Important Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/uber_db` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `NODE_ENV` | Environment mode | `development` / `production` |

---

## 📁 Project Structure

```
Backend/
├── models/                 # Database schemas
│   ├── user.model.js       # User schema definition
│   └── blacklist.js        # Token blacklist model
├── routes/                 # API routes
│   └── user.routes.js      # User authentication routes
├── controllers/            # Business logic (handler functions)
├── middlewares/            # Custom middleware
├── services/               # Service layer (utilities)
├── db/                     # Database configuration
│   └── db.js               # MongoDB connection
├── app.js                  # Express app setup
├── server.js               # Server entry point
├── .env                    # Environment variables (not in git)
├── package.json            # Project dependencies
└── README.md               # This file
```

---

## 🔌 API Routes

### Base URL: `http://localhost:5000/api`

#### User Routes (`/users`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/register` | Register a new user | ❌ No |
| `POST` | `/login` | User login | ❌ No |
| `POST` | `/logout` | User logout | ✅ Yes |
| `GET` | `/profile` | Get user profile | ✅ Yes |
| `PUT` | `/profile` | Update user profile | ✅ Yes |

#### Example Requests:

**Register User:**
```bash
POST /api/users/register
Content-Type: application/json

{
  "fullname": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Login User:**
```bash
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Get Profile (Protected):**
```bash
GET /api/users/profile
Authorization: Bearer <jwt_token>
```

---

## ▶️ Running the Server

### Development Mode:

```bash
node server.js
```

The server will start on the port specified in `.env` (default: 5000)

Output:
```
JWT_SECRET: your_super_secret_jwt_key_here
Server is running on port 5000
```

### Test the Server:

```bash
# Health check
curl http://localhost:5000/

# Response
Hello World!
```

---

## ✨ Key Features

### 1. **Secure Authentication**
- Passwords hashed with bcrypt
- JWT tokens for stateless authentication
- Token blacklist for logout functionality

### 2. **Request Validation**
- Input validation using express-validator
- Email format validation
- Password strength requirements
- Field sanitization

### 3. **CORS Support**
- Cross-origin requests enabled
- Secure by default

### 4. **Cookie Management**
- Secure cookie parsing
- Session cookie support

### 5. **Error Handling**
- Centralized error handling
- Meaningful error messages
- Proper HTTP status codes

### 6. **Database Integration**
- Mongoose ODM for MongoDB
- Schema validation
- Data persistence

---

## 📦 Dependencies

All dependencies are listed in `package.json`:

```json
{
  "express": "^5.2.1",           // Web framework
  "mongoose": "^9.5.0",          // MongoDB ODM
  "jsonwebtoken": "^9.0.3",      // JWT authentication
  "bcrypt": "^6.0.0",            // Password hashing
  "cors": "^2.8.6",              // CORS middleware
  "cookie-parser": "^1.4.7",     // Cookie parsing
  "express-validator": "^7.3.2", // Request validation
  "dotenv": "^17.4.2"            // Environment variables
}
```

To update a specific package:
```bash
npm install <package-name>@latest
```

---

## 🔒 Security Notes

1. **Never commit `.env` file** to version control
2. **Use strong JWT_SECRET** (at least 32 characters)
3. **Always hash passwords** using bcrypt
4. **Validate and sanitize** all user inputs
5. **Use HTTPS** in production
6. **Set NODE_ENV** to 'production' in production
7. **Implement rate limiting** for authentication endpoints
8. **Keep dependencies updated** regularly

---

## 🐛 Debugging

Debug mode is enabled in `server.js`. To see JWT_SECRET in logs:
```javascript
console.log("JWT_SECRET:", process.env.JWT_SECRET);
```

⚠️ **Remove debug logs before production deployment!**

---

## 🤝 Contributing

Guidelines for contributing to this project:

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see LICENSE file for details.

---

## ❓ Troubleshooting

### Port Already in Use
```bash
# Change PORT in .env file or kill the process using port 5000
```

### MongoDB Connection Failed
```bash
# Check MONGODB_URI in .env
# Ensure MongoDB is running
# For Atlas: Whitelist your IP in MongoDB Atlas
```

### JWT Errors
```bash
# Ensure JWT_SECRET is set in .env
# Check token format in Authorization header
# Token should be: "Bearer <token>"
```

### CORS Errors
```bash
# CORS is already enabled in app.js
# Ensure frontend URL is allowed (if needed)
```

---

## 📞 Support

For issues or questions:
- Check the troubleshooting section above
- Review API route documentation
- Check environment setup

---

**Last Updated:** June 2026
**Version:** 1.0.0
