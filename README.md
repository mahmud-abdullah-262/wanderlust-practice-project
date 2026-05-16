
<img width="1104" height="976" alt="lustro-Gemini_Generated_Image_uc6n3fuc6n3fuc6n" src="https://github.com/user-attachments/assets/77dab8c6-40f8-4995-9e61-07a9df2847b3" />
<img width="1024" height="1024" alt="Gemini_Generated_Image_sg423usg423usg42" src="https://github.com/user-attachments/assets/60537211-6347-4b6b-af9e-bf21d9182763" />


# 🌍 Wanderlust — Travel Booking Web Application

A full-stack travel booking platform where users can explore destinations, filter trips by budget and group size, and manage their bookings — all in one place.

🔗 **Live Demo:** [wanderlust-practice-project.vercel.app](https://wanderlust-practice-project.vercel.app/)

---

## 📸 Overview

Wanderlust is a practice full-stack project built to simulate a real-world travel booking experience. It features destination listings, a booking system, user authentication,— designed with both usability and scalability in mind.

---

## ✨ Features

- 🗺️ **Browse Destinations** — Explore curated travel destinations with details on duration, price, and location

- 📅 **Booking System** — Book trips and manage reservations from a personal dashboard
- 🔐 **User Authentication** — Secure signup and login flow
- ➕ **Add Destinations** — Authenticated users can submit new destinations
- 📱 **Responsive Design** — Works seamlessly across desktop and mobile

---

## 🛠️ Tech Stack

### Frontend
- **Next.js** — React framework for server-side rendering and routing
- **Tailwind CSS** — Utility-first CSS for styling

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — RESTful API server

### Database
- **MongoDB Atlas** — Cloud-hosted NoSQL database

### Deployment
- **Vercel** — Frontend deployment and hosting

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- MongoDB Atlas account

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmud-abdullah-262/wanderlust-practice-project.git
cd wanderlust

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Environment Variables

Create a `.env` file in the `server` directory:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

Create a `.env.local` file in the `client` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Running the App

```bash
# Start the backend server
cd server
npm run dev

# In a new terminal, start the frontend
cd client
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 📁 Project Structure

```
wanderlust/
├── client/                 # Next.js frontend
│   ├── app/
│   │   ├── destination/    # Destination listing & detail pages
│   │   ├── mybookings/     # User bookings dashboard
│   │   ├── add-destination/
│   │   ├── login/
│   │   └── signup/
│   └── public/assets/
│
└── server/                 # Express.js backend
    ├── routes/             # API route handlers
    ├── middleware/         # Auth & error middleware
    └── server.js
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/destinations` | Fetch all destinations |
| GET | `/api/destinations/:id` | Fetch a single destination |
| POST | `/api/destinations` | Add a new destination |
| POST | `/api/bookings` | Create a booking |
| GET | `/api/bookings/user/:id` | Get bookings by user |
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |

---

## 🎯 What I Learned

- Designing and structuring a RESTful API with **Express.js**
- Connecting a Node.js server to **MongoDB Atlas** 
- Building full-stack features end-to-end: auth, CRUD, and data relationships
- Deploying a Next.js app on **Vercel**
- Managing environment variables and keeping secrets secure

---

## 🔮 Future Improvements

- [ ] Payment gateway integration
- [ ] Review and rating system for destinations
- [ ] Admin dashboard for managing listings
- [ ] Email confirmation on booking
- [ ] Advanced search with map view

---

## 👤 Author

Built with ❤️ as a full-stack practice project.

---


