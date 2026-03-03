# Full Stack – II Experiment 5

## 📌 Objective
Enhance Experiment 4 React project using:
- Redux Toolkit (State Management)
- Context API (Theme & User)
- useMemo (Performance Optimization)
- React Router (Multi-page navigation)

---

## 🚀 Technologies Used

- React (Vite)
- Redux Toolkit
- React-Redux
- React Router DOM
- Context API
- Bootstrap

---

## 📂 Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CardComponent.jsx
│   ├── ThemeToggle.jsx
│
├── context/
│   └── AppContext.jsx
│
├── redux/
│   ├── store.js
│   └── slices/
│       └── cartSlice.js
│
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── Reports.jsx
│
├── App.jsx
├── main.jsx
└── index.css

---

## ✅ Features Implemented

- Multi-page routing
- Global theme toggle (Context API)
- User login/logout (Context API)
- Cart management (Redux Toolkit)
- Derived calculations using useMemo
- Reports dashboard page
- Responsive Bootstrap UI

---

## ⚙️ Installation

```bash
npm install
npm run dev