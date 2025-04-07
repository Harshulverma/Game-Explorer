# 🎮 Game Explorer

A fully responsive front-end web application that fetches and displays real-time video game data using the RAWG API. Built with **React**, styled using **Bootstrap**, and enhanced with **Clerk Auth** and **Redux** for a dynamic user experience.
---

## 🚀 Live Demo

🌐 [Live Site](https://game-explorer-rho.vercel.app/)

---

## 📌 Features

- ✅ Responsive UI with clean layout and game cards  
- 🔍 Real-time Search Functionality  
- 🎯 Filter games by category, genre, tags, release year, and popularity  
- 📖 Game Detail Page with screenshots, ratings, and description  
- ⭐ Bookmark System using Redux (persisted state)  
- 🔐 User Authentication using Clerk  
- 📚 "Library" page for managing favorite/bookmarked games  
- 🔄 Pagination to explore a large number of games  

---

## 🧰 Tech Stack

| Frontend        | Auth   | State Management | API      |
|-----------------|--------|------------------|----------|
| React           | Clerk  | Redux            | RAWG API |
| Bootstrap       |        |                  |          |
| React-Bootstrap |        |                  |          |

---

## 📂 Folder Structure (Simplified)

📁 src/
│
├── 📁 api/                # API fetch functions
├── 📁 components/         # Reusable UI components (Navbar, Filters, Cards)
├── 📁 pages/              # Main pages (Home, GameDetail, Library)
├── 📁 redux/              # Redux store, slices
├── App.js
├── index.js
└── styles.css



---

## 🛠️ Setup & Run Locally

```bash
git clone https://github.com/Harshulverma/Game-Explorer.git
cd game-hub
npm install
npm start

