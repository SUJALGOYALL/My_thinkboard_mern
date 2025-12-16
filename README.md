# 📘 ThinkBoard – MERN Notes App

ThinkBoard is a simple, elegant, and fast **full-stack MERN application** for creating and managing notes.  
Built with **MongoDB, Express.js, React (Vite), Node.js, TailwindCSS, and DaisyUI**, this app is fully deployed on Render.

---

## 🚀 Live Demo

🔗 **https://my-thinkboard-mern.onrender.com/**  
(Backend + Frontend served together)

---

## ⭐ Features

- 📝 Create notes  
- 📄 View individual notes  
- ✏️ Edit notes *(optional)*  
- 🗑️ Delete notes  
- 🚦 Rate-limited to prevent spam  
- ⚡ Fast dev + build via Vite  
- 🎨 Clean UI using Tailwind + DaisyUI  
- 🔔 Toast notifications for UX feedback  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- TailwindCSS
- DaisyUI
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Upstash Redis (Rate Limiting)
- dotenv

### Deployment
- Render (Web Service)
- MongoDB Atlas

---

## 📁 Project Structure

```
My_thinkboard_mern/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   ├── jsconfig.json
│   ├── .env
│
└── frontend/
    ├── dist/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── components/
    │   │    ├── Navbar.jsx
    │   │    ├── NoteCard.jsx
    │   │    ├── NotesNotFound.jsx
    │   │    └── RateLimitedUI.jsx   ← PERFECT
    │   ├── lib/
    │   │    ├── axios.js
    │   │    └── utils.js
    │   ├── pages/
    │   │    ├── CreatePage.jsx
    │   │    ├── HomePage.jsx
    │   │    └── NoteDetailPage.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js

```

---

## ⚙️ Local Development Setup

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/SUJALGOYALL/My_thinkboard_mern.git
cd My_thinkboard_mern
```

---

## 🛠️ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_url
PORT=5001
NODE_ENV=development
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

Run backend:

```bash
npm start
```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Local URL:
```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get one note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

---

## 🚀 Production Build (Render)

Build frontend:

```bash
cd frontend
npm run build
```

Start backend in production mode:

```bash
cd backend
NODE_ENV=production npm start
```

Backend will serve the frontend from:

```
frontend/dist/
```

---

## 🤝 Contributing

Pull requests are welcome!  
Feel free to open issues for improvements or bugs.

---

## 📄 License

This project is intended for educational and personal learning purposes only.
