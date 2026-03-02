# EXP4 - React Context API and Reducer Implementation

## 📌 Aim

To build a React application using Context API and useReducer for global state management, along with routing and dynamic UI components.

## 📌 Description

In this experiment, a React-based single page application was developed using Vite as the project scaffold. The project demonstrates:

- Component-based architecture
- Global state management using Context API
- State updates using useReducer
- Routing using React Router DOM
- Reusable UI components
- A simple cart system

## 🧠 Features Implemented

1. **Navbar Component**
   - Navigation links to Home and Cart routes.

2. **Theme Toggle**
   - Use of Context API to manage a global theme state.

3. **Filter Bar**
   - Allows filtering of products by category.

4. **Card Component**
   - Displays items and allows adding them to the cart.

5. **Cart Page**
   - Shows items added in the cart with remove function.

6. **Context API and Reducer**
   - Centralized state management for app-wide update.

## 🛠️ Tools & Technologies

- React
- Vite
- React Router DOM
- Context API
- useReducer Hook
- Bootstrap CSS
- Material UI (optional if used)

## 📂 Folder Structure
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── HeroSection.jsx
│ ├── CardComponent.jsx
│ ├── ThemeToggle.jsx
│ └── FilterBar.jsx
│
├── context/
│ └── AppContext.jsx
│
├── reducer/
│ └── appReducer.js
│
├── pages/
│ ├── Home.jsx
│ ├── Cart.jsx
│
├── App.jsx
├── main.jsx
└── index.css


## 🧪 How It Works

### 🔹 Routing

Navigation between Home and Cart pages uses React Router DOM.

### 🔹 State Management

A global app state was created using:

- `AppContext` - Provides shared state across components.
- `appReducer` - Handles state updates based on actions.

### 🔹 Workflow

- Items are displayed on the Home page.
- Clicking **Add to Cart** adds items to the global cart state.
- Cart page shows the items added with option to remove.

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Maniin1077/Fst2Exp4.git