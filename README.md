# 🔗 QuickLink - URL Shortener & Analytics

![NodeJS](https://img.shields.io/badge/Node.js-LTS-green?style=for-the-badge&logo=node.js)
![ExpressJS](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![EJS](https://img.shields.io/badge/EJS-Templates-orange?style=for-the-badge)

A URL shortening service built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. The application generates unique short URLs, redirects users to the original destination, and tracks click analytics with timestamp-based visit history.

---

## 🚀 Features

- Generate unique short URLs using **NanoID**
- Redirect users from shortened links to original URLs
- Track click analytics for every shortened URL
- Store timestamp-based visit history
- Server-side rendered pages using **EJS**
- Modular backend architecture with Express routers and controllers

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Templating Engine
- EJS

### Utilities
- NanoID

---

## 📂 Project Structure

```text
.
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   ├── url.js
│   └── staticRouter.js
├── views/
│   ├── home.ejs
│   └── analyticsForm.ejs
├── connection.js
├── index.js
├── package.json
└── README.md
```

---

## 🗺️ Routes

| Method | Route | Description |
|----------|----------|----------|
| GET | `/` | Render homepage |
| POST | `/url` | Create short URL |
| GET | `/url/:id` | Redirect to original URL |
| GET | `/url/analytics` | Analytics lookup page |
| POST | `/url/analytics` | Display analytics data |

---

## 📊 Database Schema

```javascript
{
  shortID: {
    type: String,
    required: true
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
  ]
}
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18 or later)
- MongoDB running locally

### Clone Repository

```bash
git clone https://github.com/Akshat2516/url-shortner.git
cd url-shortner
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running locally on:

```text
mongodb://127.0.0.1:27017
```

### Run Application

```bash
node index.js
```

or with Nodemon:

```bash
nodemon index.js
```

---

## 🌐 Usage

1. Open:

```text
http://localhost:8000
```

2. Enter a long URL.

3. Generate a shortened URL.

4. Use the short link for redirection.

5. Check analytics by entering the generated short ID on the analytics page.

---

## 📈 Future Improvements

- User authentication
- Custom short aliases
- URL expiration support
- QR code generation
- Dashboard with charts and analytics
- Rate limiting and security enhancements

---

## 👨‍💻 Author

**Akshat Dhongade**

- GitHub: https://github.com/Akshat2516
- LinkedIn: https://linkedin.com/in/akshat-dhongade

---

⭐ If you found this project useful, consider giving it a star.