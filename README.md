# 📤 Image Upload App (Backend)

[Frontend Link](https://multer-frontend-woad.vercel.app/)

[Backend Link](https://multer-backend-neon.vercel.app/)

[Github Frontend Link](https://github.com/priyankastack/multer-frontend)

[Github Backend Link](https://github.com/priyankastack/multer-backend)

This is the **backend** of the Image Upload application built with **Node.js**, **Express**, **Multer**, and **Cloudinary**. It provides API endpoints to:

- Upload images from the frontend
- Store images on **Cloudinary**
- Save the returned URL in **MongoDB**
- Retrieve all uploaded images

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- Multer (for file handling)
- Cloudinary (for image storage)
- MongoDB (for storing image URLs)
- Mongoose (for MongoDB connection)

---

## 📦 Features

- Upload images via a POST request
- Save image URLs to MongoDB after Cloudinary upload
- Retrieve and return all uploaded image data
- Image validation and size limitation
- Temporary file cleanup using `fs`
