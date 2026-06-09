# 📦 jwt-auth-handler

A lightweight, modular authentication toolkit for Node.js applications.

It provides **JWT utilities, authentication middleware, role-based access control, and password helpers** designed for real-world backend APIs.

---

# ⚡ Features

* 🔐 JWT token generation & verification
* 🛡️ Authentication middleware for Express-style apps
* 🎭 Role-based access control (RBAC)
* 🔑 Password hashing & comparison (bcrypt-based)
* ⚙️ Lightweight, zero framework lock-in
* 🚀 Easy integration in minutes

---

# 📥 Installation

```bash
npm install jwt-auth-kit
```

---

# 🚀 Quick Start

## 1. Create a token

```js
const jwtAuth = require("jwt-auth-kit");

const token = jwtAuth.generateToken(
  { id: 1, role: "admin" },
  "SECRET_KEY",
  { expiresIn: "1h" }
);

console.log(token);
```

---

## 2. Verify a token

```js
const decoded = jwtAuth.verifyToken(token, "SECRET_KEY");

console.log(decoded);
```

---

## 3. Protect routes (Authentication Middleware)

```js
const express = require("express");
const jwtAuth = require("jwt-auth-kit");

const app = express();

const auth = jwtAuth.authMiddleware("SECRET_KEY");

app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});
```

---

## 4. Role-based access control

```js
const adminOnly = jwtAuth.roleMiddleware(["admin"]);

app.delete("/users", auth, adminOnly, (req, res) => {
  res.json({ message: "User deleted successfully" });
});
```

---

## 5. Password utilities

```js
const { hashPassword, comparePassword } = require("jwt-auth-kit");

async function run() {
  const hash = await hashPassword("myPassword123");

  const isValid = await comparePassword("myPassword123", hash);

  console.log({ hash, isValid });
}

run();
```

---

# 🧱 API Reference

## 🔐 generateToken(payload, secret, options)

Creates a JWT token.

```js
generateToken({ id, role }, secret, { expiresIn: "1h" });
```

---

## 🔍 verifyToken(token, secret)

Verifies and decodes a token.

Returns decoded payload or `null`.

---

## 🛡 authMiddleware(secret)

Express middleware that:

* checks Authorization header
* verifies JWT
* attaches user to `req.user`

---

## 🎭 roleMiddleware(allowedRoles)

Protect routes based on user role.

```js
roleMiddleware(["admin", "moderator"]);
```

---

## 🔑 hashPassword(password, saltRounds)

Hashes password using bcrypt.

---

## 🔓 comparePassword(password, hash)

Validates password against hash.

---

# 🧠 Design Philosophy

This package is built with:

* **Simplicity over complexity**
* **Modularity over monoliths**
* **Developer experience first**
* **Drop-in usability in real backend apps**

It is NOT a full authentication system.

Instead, it is a **toolkit for building your own auth systems faster and cleaner**.

---

# ⚠️ Important Notes

* You must manage your own JWT secret securely
* This package does NOT handle database storage
* Designed for backend frameworks like Express

---

# 📌 Example Architecture Usage

Typical backend structure:

```text
routes/
controllers/
middleware/
services/
```

Use `jwt-auth-kit` inside middleware + services layer.

---

# 🔥 Why use this?

Most projects repeatedly implement:

* JWT logic
* role checks
* password hashing

This package removes that repetition and gives you a clean reusable layer.

---

# 🛠 Roadmap

Planned improvements:

* TypeScript support
* Refresh token utilities
* Cookie-based auth helpers
* Rate limiting middleware
* OAuth helper extensions

---

# 👨‍💻 Author

Built by a developer focused on simplifying backend authentication systems and improving developer productivity.

---

# 📄 License

MIT

---
