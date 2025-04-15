# Hospital Management System

A full-stack hospital management system with a Node.js/Express backend and Angular frontend.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or newer recommended)
- **MongoDB** (running locally on default port, or update the connection string in `backend/server.js`)
- **Angular CLI** (`npm install -g @angular/cli`)

---

### 1. Backend Setup

```sh
cd backend
npm install
# (Optional) Create a .env file if you want to override defaults
node server.js
```
- The backend runs at `http://localhost:3000/`

---

### 2. Frontend Setup

```sh
cd hospital-frontend
npm install
ng serve
```
- The Angular app runs at `http://localhost:4200/`

---

### 3. Access the App
- Open your browser and go to `http://localhost:4200/`
- No authentication is required by default.

---

### 4. Environment Variables & Configuration
- To use a custom MongoDB URI or ports, create a `.env` file in `/backend` and update the connection string in `backend/server.js`.

---

### 5. Database
- The app will auto-create collections when you add data via the UI.
- No seed data is provided by default.

---

### 6. .gitignore
- This project includes a `.gitignore` to avoid committing `node_modules`, build artifacts, `.env`, and editor/OS junk files.

---

### 7. Contributing
- Fork and clone the repository.
- Create a new branch for your feature or bugfix.
- Make your changes and submit a pull request.

---

### 8. Troubleshooting
- **Port in use?** Change the port in `backend/server.js` or stop other services using the port.
- **MongoDB connection error?** Make sure MongoDB is running and the URI is correct.
- **Angular errors?** Run `npm install` in `hospital-frontend` and ensure you’re using a compatible Node.js version.

---

### 9. License
This project is for educational/demo purposes. Adapt and use as needed!
