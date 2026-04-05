# MERN User Admin Plus

<video src="https://github.com/rojanagunoori/mern-user-admin-plus/blob/main/client/public/user_admin_plus.mp4" controls style="max-width: 100%;"></video>

![Screenshot 1](https://raw.githubusercontent.com/rojanagunoori/mern-user-admin-plus/main/client/public/user-admin-plus1.png)
![Screenshot 2](https://raw.githubusercontent.com/rojanagunoori/mern-user-admin-plus/main/client/public/user-admin-plus2.png)
![Screenshot 3](https://raw.githubusercontent.com/rojanagunoori/mern-user-admin-plus/main/client/public/user-admin-plus3.png)

A full-stack MERN application for managing users efficiently with CRUD operations, profile upload, search/filter, pagination, and CSV export.

## 1. Important Links

**Frontend Live Demo:** https://mern-useradmin-plus.netlify.app/

**Frontend Repo:** [GitHub Frontend](https://github.com/rojanagunoori/mern-user-admin-plus)

**Backend Repo:** https://github.com/rojanagunoori/mern-user-admin-plus-backend

**Backend API Base URL:** https://mern-user-admin-plus-backend.onrender.com

## 2. Project Overview

MERN User Admin Plus is a full-featured user management application built with the MERN stack (MongoDB, Express, React, Node.js). It is designed for admins to efficiently manage user data in a structured way.

### Key functionalities:

Add Users: Admins can add users with profile images.

- **Edit & Delete Users:** Update user information or remove users from the system.
- **View User Details:** Access detailed information about a specific user.
- **Search & Filter:** Filter users by name, gender, or status.
  Pagination: Navigate through large datasets easily.
- **Export Users:** Export all users as a CSV file for reporting or backup.
- **Responsive UI:** Works on desktops, tablets, and mobile devices.

**Purpose:** Streamline user management with a simple, scalable, and maintainable full-stack solution.

---

## 3. 🚀 Features

- **Add Users with Profile Images –** Upload avatars for new users.
- **Edit & Delete Users –** Modify existing user information or remove users entirely.
- **Search & Filter Users –** Quickly locate users by name, gender, or status.
- **Pagination –** Automatically splits users into pages for easier navigation.
- **Export Users to CSV –** Download all user data in CSV format for offline use.
- **Detailed Profile View –** Click on a user to see complete information including profile image, location, status, and timestamps.
- **Responsive UI –** Works perfectly across desktops, tablets, and mobile devices.
- **Toast Notifications –** Success and error messages for all user actions.
- **Lazy Loading –** Only load components when needed to improve performance.

---

## 4. Folder / Project Structure

```bash
Frontend (client)
client/
├─ src/
│  ├─ components/
│  │  ├─ context/          # Global state for add/update/delete
│  │  ├─ Headers/          # Navbar
│  │  ├─ Pagination/       # Pagination component
│  │  └─ Spiner/           # Loading spinner
│  ├─ pages/
│  │  ├─ Home/             # Home page
│  │  ├─ Register/         # User registration form
│  │  ├─ Edit/             # Edit user page
│  │  └─ Profile/          # User profile page
│  ├─ services/
│  │  ├─ apiCall.js        # Axios requests
│  │  ├─ Apis.js           # API functions
│  │  └─ helper.js         # Constants
│  ├─ App.js
│  ├─ App.css
│  └─ index.js
```

Backend (backend)

```bash
backend/
├─ Controllers/           # User controller logic (CRUD, export)
├─ Routes/                # API routes
├─ models/                # Mongoose schemas
├─ multerconfig/          # File upload configuration
├─ public/files/          # Exported CSV files
├─ db/                    # Database connection
├─ app.js                 # Express server
├─ package.json
└─ .env                   # Environment variables
```

## 5. Tech Stack / Environment

**Frontend:**

- **React.js –** Frontend framework for building dynamic user interfaces.
- **React Router DOM –** Routing between pages.
- **React Bootstrap –** Prebuilt responsive components.
- **React Select –** Dropdown select components.
- **React Toastify –** Notifications and alerts.
- **Axios –** HTTP requests to the backend API.

**Backend:**

- **Node.js + Express –** Server-side framework.
- **MongoDB + Mongoose –** Database and ODM for user data.
- **Multer –** File uploads for profile images.
- **Moment.js –** Timestamp formatting for created/updated dates.
- **Fast-CSV –** CSV export functionality.
- **CORS –** Cross-Origin requests handling.

## 6. Installation / Setup

### Backend Setup

#### Clone backend

```bash
git clone https://github.com/rojanagunoori/mern-user-admin-plus-backend.git
cd mern-user-admin-plus-backend
```

#### Install dependencies

```bash
npm install
```

#### Create .env file

```bash
PORT=6010
MONGO_URL=your_mongodb_connection_string
BASE_URL=http://localhost:6010
```

# Start backend server

```bash
node server.js
```

**Server URL:** http://localhost:6010

## Frontend Setup

### Clone frontend

```bash
git clone https://github.com/rojanagunoori/mern-user-admin-plus.git
cd mern-user-admin-plus/client
```

#### Install dependencies

```bash
npm install
```

#### Start frontend

```bash
npm start
```

**Frontend URL:** http://localhost:3000

Make sure the backend server is running first.

---

## 7. Environment Variables

### Backend (.env)

```bash
PORT=6010
MONGO_URL=<your_mongodb_connection_string>
BASE_URL=http://localhost:6010
```

### Frontend (.env) (optional)

```bash
REACT_APP_API_URL=http://localhost:6010
```

---

## 8. API Usage

### Register User

```bash
import { registerfunc } from './Apis';

const formData = new FormData();
formData.append("fname", "John");
formData.append("lname", "Doe");
formData.append("email", "john@example.com");
formData.append("mobile", "1234567890");
formData.append("gender", "Male");
formData.append("status", "Active");
formData.append("location", "New York");
formData.append("user_profile", file);

const response = await registerfunc(formData, {
  headers: { "Content-Type": "multipart/form-data" }
});
```

### Get Users with Filters & Pagination

```bash
import { usergetfunc } from './Apis';
const response = await usergetfunc("john", "Male", "Active", "New", 1);
console.log(response.data.usersData);
```

### Other Endpoints

```bash
| Endpoint           | Method | Description             |
| ------------------ | ------ | ----------------------- |
| `/user/:id`        | GET    | Get single user by ID   |
| `/user/edit/:id`   | PUT    | Edit user               |
| `/user/delete/:id` | DELETE | Delete user             |
| `/user/status/:id` | PUT    | Change status           |
| `/userexport`      | GET    | Export all users to CSV |
```

---

## 9. Key Components

- **ContextProvider –** Manages global state for adding, updating, and deleting users.
- **Headers –** Navbar component with navigation links and branding.
- **Register –** Form component to add new users with input validation and profile upload.
- **Edit –** Form for editing existing user information.
- **Profile –** Displays detailed information about a single user.
- **Pagination –** Component to navigate through multiple pages of users.
- **Spiner –** Loading indicator for async operations.

  ***

## 10. Security

- **Validation:** Frontend and backend validation ensures correct inputs.
- **File Upload Restrictions:** Only allows .png, .jpg, and .jpeg file types.
- **Environment Variables:** MongoDB credentials and server configuration are stored in .env files.
- **Error Handling:** Backend returns status codes and messages, frontend displays toast notifications.
- **Duplicate Prevention:** Ensures unique emails and prevents duplicate mobile numbers.

---

## 11. Challenges Faced

- **File Upload Handling:** Managing multer storage, naming, and validation for profile images.
- **Search & Filter Logic:** Implementing server-side filters for name, gender, and status efficiently.
- **Pagination:** Calculating page count and skipping correct number of records per page.
- **Responsive UI:** Ensuring that the frontend works seamlessly on all screen sizes.
- **Global State Management:** Managing user state updates globally using React context.
- **Data Validation:** Ensuring unique emails and mobile numbers across the database.

  ***

## 12. Future Improvements

- **JWT Authentication:** Secure admin access and protect API routes.
- **Role-Based Permissions:** Assign different levels of access for users/admins.
- **Analytics Dashboard:** Display statistics and charts for user data.
- **Dark Mode:** Toggle between light and dark UI themes.
- **Infinite Scroll:** Replace pagination with smooth infinite scrolling for large datasets.
- **Unit & Integration Tests:** Automated tests for frontend and backend functionality.
  ***

## 13. Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add feature`')
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 14. Acknowledgments

- **React**
- **Node.js**
- **MongoDB**
- **React Bootstrap**
- **React Toastify**
- **Inspiration: Full-stack MERN tutorials**

---

## 15. License

This project is licensed under the MIT License – see the LICENSE file for details.

---

## 🙋‍♀️ Author / Contact

**Nagunoori Roja**

- 📧 Email: [nagunooriroja@gmail.com](mailto:nagunooriroja@gmail.com)
- 🌐 GitHub: [https://github.com/rojanagunoori](https://github.com/rojanagunoori)
- 🌐 LinkedIn: [https://www.linkedin.com/in/nagunoori-roja-51b936267/](https://www.linkedin.com/in/nagunoori-roja-51b936267/)
- 🌐 Personal Portfolio: [portfolio-roja.netlify.app](https://portfolio-roja.netlify.app/)
- 🌐 LeetCode: [https://leetcode.com/u/dSdsi6XkI8/](https://leetcode.com/u/dSdsi6XkI8/)
- 🌐 Kaggle: [https://www.kaggle.com/nagunooriroja](https://www.kaggle.com/nagunooriroja)

---
