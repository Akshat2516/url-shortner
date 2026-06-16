# 🔗 QuickLink - URL Shortener, Analytics & Authentication

![NodeJS](https://img.shields.io/badge/Node.js-LTS-green?style=for-the-badge&logo=node.js)
![ExpressJS](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red?style=for-the-badge)
![EJS](https://img.shields.io/badge/EJS-Templates-orange?style=for-the-badge)

A full-stack URL shortening platform built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**. Users can create accounts, log in, generate shortened URLs, track click analytics, and manage their own links through a server-rendered web interface.

---

## 🚀 Features

### URL Shortening
- Generate unique short URLs using **NanoID**
- Redirect users to the original destination URL
- Fast and lightweight URL generation

### Analytics
- Track total clicks for every shortened URL
- Store timestamp-based visit history
- View URL analytics through a dedicated analytics page

### Authentication
- User Signup and Login
- JWT-based **Stateless Authentication**
- Session management using server-side session storage
- Protected routes accessible only to authenticated users

### User-Specific URLs
- Each user can create and manage their own URLs
- URLs are associated with the user who created them
- Dashboard displays only the logged-in user's URLs

### Backend Architecture
- MVC-inspired project structure
- Modular routing and controllers
- MongoDB persistence using Mongoose ODM
- Server-side rendering with EJS

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Frontend / Templates
- EJS

### Authentication
- Cookies
- Stateful Session Management

### Utilities
- NanoID

---

## 📂 Project Structure

```text
.
├── controllers/
│   ├── url.js
│   └── user.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   ├── url.js
│   └── user.js
│
├── routes/
│   ├── url.js
│   ├── user.js
│   └── staticRouter.js
│
├── services/
│   └── auth.js
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   └── analyticsForm.ejs
│
├── connection.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🗺️ Routes

### Authentication Routes

| Method | Route | Description |
|----------|----------|----------|
| GET | `/signup` | Render signup page |
| POST | `/user/signup` | Register a new user |
| GET | `/login` | Render login page |
| POST | `/user/login` | Authenticate user |

---

### URL Routes

| Method | Route | Description |
|----------|----------|----------|
| GET | `/` | Home page (Protected) |
| POST | `/url` | Generate short URL |
| GET | `/url/:id` | Redirect to original URL |
| GET | `/url/analytics` | Render analytics page |
| POST | `/url/analytics` | Fetch URL analytics |

---

## 🔐 Authentication Flow

1. User signs up using email and password.
2. User logs in.
3. A unique session ID is generated.
4. Session ID is stored in a cookie.
5. Session data is maintained on the server.
6. Protected routes verify the session before granting access.

---

## 📊 Database Schema

### User Schema

```javascript
{
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
}
```

### URL Schema

```javascript
{
  shortID: {
    type: String,
    required: true,
    unique: true
  },

  redirectURL: {
    type: String,
    required: true
  },

  visitHistory: [
    {
      timestamp: {
        type: Number
      }
    }
  ],

  createdBy: {
    type: ObjectId,
    ref: "user",
    required: true
  }
}
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18 or later)
- MongoDB

### Clone Repository

```bash
git clone https://github.com/Akshat2516/url-shortner.git
cd url-shortner
```

### Install Dependencies

```bash
npm install
```

### Configure MongoDB

Make sure MongoDB is running locally:

```text
mongodb://127.0.0.1:27017
```

Update the connection string in your project if needed.

### Run the Application

```bash
node index.js
```

or

```bash
nodemon index.js
```

---

## 🌐 Usage

### Create an Account

1. Open:

```text
http://localhost:8000/signup
```

2. Register with your details.

### Login

1. Visit:

```text
http://localhost:8000/login
```

2. Enter your credentials.

### Create a Short URL

1. Paste a long URL.
2. Click **Generate**.
3. Receive a unique shortened URL.

### View Analytics

1. Navigate to the analytics page.
2. Enter a short ID.
3. View total clicks and visit history.

---

## 📈 Future Improvements

- URL expiration support
- QR code generation
- Dashboard with charts and analytics
- Rate limiting and security enhancements

---

## 🎯 Learning Outcomes

This project helped me gain hands-on experience with:

- RESTful API Design
- Express.js Routing
- MongoDB and Mongoose
- JavaScript Web Token (JWT)
- Stateful and Stateless Authentication
- Cookies and Session Management
- Server-Side Rendering with EJS
- MVC-inspired Backend Architecture
- Database Relationships and References
- URL Analytics Tracking

---

## 👨‍💻 Author

**Akshat Dhongade**

GitHub: https://github.com/Akshat2516

LinkedIn: https://linkedin.com/in/akshat-dhongade

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

Contributions, suggestions, and feedback are always welcome.