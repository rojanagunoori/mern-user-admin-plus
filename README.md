# MERN User Admin Plus

## 📌 Project Overview

MERN User Admin Plus is a full-stack **User Management Admin Dashboard** built using the **MERN stack**.  
The application allows administrators to manage users efficiently with complete **CRUD operations**, **profile image upload**, **status management**, **searching**, **filtering**, **pagination**, and **CSV export**.

The project follows a **client–server architecture**:
- **Frontend (React)** handles UI, routing, and user interactions
- **Backend (Node + Express)** exposes REST APIs and business logic
- **MongoDB** stores user data
- Application is deployed using modern cloud platforms

---

## 🌐 Live Application Links

- **Frontend (Netlify):**  
  https://mern-useradmin-plus.netlify.app

- **Backend API (Render):**  
  https://mern-user-admin-plus-backend.onrender.com

---

## 🧱 Tech Stack Used

### Frontend Technologies

| Technology | Usage |
|---------|------|
| React.js | UI development |
| React Router DOM | Client-side routing |
| Context API | Global state management |
| Axios | API communication |
| React Bootstrap | Responsive UI components |
| React Toastify | Notifications |
| Moment.js | Date formatting |
| CSS3 | Styling & animations |

---

### Backend Technologies

| Technology | Usage |
|---------|------|
| Node.js | Runtime environment |
| Express.js | REST API framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| Multer | Image upload handling |
| CSV Writer | Export users to CSV |
| dotenv | Environment variables |
| CORS | Cross-origin requests |

---

## 🏗 Application Architecture

React Frontend
|
| Axios API Calls
|
Express Backend
|
MongoDB Database

yaml
Copy code

- Frontend communicates with backend via REST APIs
- Backend performs CRUD operations
- MongoDB stores user records
- Images are stored on backend server

---

## ⚙️ Frontend Setup (Local)

### 1️⃣ Clone Frontend Repository

```bash
git clone https://github.com/rojanagunoori/mern-user-admin-plus.git
cd mern-user-admin-plus
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Configure Environment Variables
Create a .env file in the frontend root directory:

```bash
REACT_APP_BASE_URL=https://mern-user-admin-plus-backend.onrender.com
```

For local backend:

```bash
REACT_APP_BASE_URL=http://localhost:6010
```

### 4️⃣ Start Frontend Application
```bash
npm start
```
Frontend runs on:

```bash
http://localhost:3000
```

## ⚙️ Backend Setup (Local)
### 1️⃣ Clone Backend Repository
```bash
git clone https://github.com/rojanagunoori/mern-user-admin-plus-backend.git
cd mern-user-admin-plus-backend
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Configure Environment Variables
Create a .env file in backend root directory:

```bash
PORT=6010
MONGO_URL=your_mongodb_connection_string
```

### 4️⃣ Start Backend Server
```bash
npm start
```
Backend runs on:

```bash
http://localhost:6010
```
## 🔗 API Integration (Frontend ↔ Backend)
* Axios is used for HTTP requests

* All API calls are centralized in services/Apis.js

* Base URL is managed in services/helper.js

* Backend provides REST endpoints for:

*User registration

* Fetch users

* Edit user

* Delete user

* Status update

* CSV export

## 🚀 Application Features (Detailed)
### ✅ User Listing
* Displays all users in a table

* Shows profile image, name, email, gender, and status

### ✅ Add New User
* Create users with profile image upload

* Image preview before submission

* Uses FormData

### ✅ Edit User
* Pre-filled edit form

* Update details and profile image

### ✅ View User Profile
* Displays complete user information

* Uses Moment.js for date formatting

### ✅ Delete User
* Permanently removes user

* Confirmation via UI feedback

### ✅ Search Users
* Search by name or email

* Backend-driven filtering

### ✅ Filter & Sort
* Filter by gender and status

* Sort by newest/oldest users

### ✅ Pagination
* Backend-controlled pagination

* Improves performance

### ✅ Status Management
* Toggle Active / InActive

* Real-time UI update

### ✅ Export to CSV
* Download all users as CSV file

* Server-side CSV generation

## 🔄 Global State Management
*  Context API is used for:

*  Add user success message

*  Update user success message

*  Delete user success message

*  Avoids unnecessary re-renders

## 🌍 Deployment
* Component	Platform
* Frontend	Netlify
Backend	Render
Database	MongoDB Atlas

## 🔐 Environment & Security
.env files are ignored using .gitignore

Sensitive credentials are not committed

Separate configs for development & production

## 👨‍💻 Author
Roja nagunoori
GitHub: https://github.com/rojanagunoori

## 📜 License
MIT License
