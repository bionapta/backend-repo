# EBUDDY Backend API

### 📌 Tech Stack
- Node.js, Express.js, TypeScript
- Firebase Firestore, Firebase Admin SDK
- Middleware Authentication

### 🚀 Setup & Run
1. **Install dependencies**
  ```
  npm install
  ```
2. **Setup Firebase Service Account**  
- Buat file `.env` dan tambahkan:  
  ```
  FIREBASE_SERVICE_ACCOUNT=isi-dengan-json-service-account
  ```
3. **Jalankan backend**
  ```
  npm run dev
  ```
4. **Test API dengan Postman**  
- **Login:** `POST /api/auth/login`  
- **Fetch User Data:** `GET /api/fetch-user-data/:id`  
- **Update User Data:** `PUT /api/update-user-data/:id`
