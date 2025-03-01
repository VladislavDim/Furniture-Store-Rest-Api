# Furniture Store REST API

This is a backend implementation for a **Furniture Store** web application. The frontend part is provided as part of a **SoftUni educational workshop**, and this repository contains the REST API that handles user authentication, furniture management, and CRUD operations.

## ⚡ Features
- User authentication (Register, Login, Logout)
- CRUD operations for furniture:
  - Create new furniture
  - View all furniture
  - View details for a specific item
  - Update furniture
  - Delete furniture
  - View user-specific furniture listings

## 🛠 Technologies Used
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **Bcrypt** for password hashing
- **JSON Web Tokens (JWT)** for authentication

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/users/register` | Register a new user |
| POST | `/users/login` | Login a user |
| GET | `/users/logout` | Logout a user |
| POST | `/data/catalog` | Create a furniture item |
| GET | `/data/catalog` | Get all furniture |
| GET | `/data/catalog/:id` | Get furniture details |
| PUT | `/data/catalog/:id` | Update furniture |
| DELETE | `/data/catalog/:id` | Delete furniture |
| GET | `/data/catalog?where=_ownerId%3D"{userId}"` | Get user-specific furniture |

⚠️ Disclaimer
This project is developed as part of an educational workshop by SoftUni. It is intended only for learning purposes and should not be used for commercial applications.
