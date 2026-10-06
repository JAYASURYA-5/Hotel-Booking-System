# 🏨 Hotel Booking System

<div align="center">

### ✨ Find Your Perfect Stay. Book With Ease. ✨

A modern and responsive **Hotel Booking System** built with React, TypeScript, Vite, Tailwind CSS, and Supabase.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

<br>

🌐 **Live Demo:**  
[**Hotel Booking System**](https://hotel-booking-system-steel.vercel.app/)

</div>

---

## 📖 About The Project

**Hotel Booking System** is a modern full-stack-style hotel reservation web application designed to provide users with a smooth and convenient hotel discovery and booking experience.

Users can explore hotels, search for suitable stays, view detailed hotel information, manage favorites, authenticate their accounts, and access their booking information through a clean and responsive interface.

The project focuses on combining a **modern user interface**, **efficient navigation**, and **database-backed functionality** to create a practical hotel reservation platform.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🏨 **Hotel Discovery** | Browse available hotels through an attractive interface |
| 🔍 **Hotel Search** | Search and explore hotels based on user requirements |
| 📋 **Hotel Details** | View detailed information about individual hotels |
| 📅 **Booking Management** | View and manage hotel booking information |
| ❤️ **Favorites** | Save preferred hotels for quick access |
| 🔐 **Authentication** | User authentication and account management |
| 📱 **Responsive Design** | Works across desktop, tablet, and mobile devices |
| ⚡ **Fast Performance** | Powered by Vite and optimized React components |
| 🗄️ **Supabase Integration** | Database and backend services through Supabase |
| 🎨 **Modern UI** | Tailwind CSS with reusable UI components |

---

## 🧭 Application Flow

```text
                    ┌──────────────────┐
                    │   User Visits    │
                    │      Website     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Home Page      │
                    │     /            │
                    └────────┬─────────┘
                             │
                ┌────────────┼────────────┐
                ▼            ▼            ▼
          ┌──────────┐ ┌──────────┐ ┌──────────┐
          │  Search  │ │  Hotels  │ │ Favorites│
          └────┬─────┘ └────┬─────┘ └──────────┘
               │             │
               └──────┬──────┘
                      ▼
              ┌─────────────────┐
              │  Hotel Details  │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │      Booking    │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Booking History │
              └─────────────────┘
```

---

## 📱 Main Pages

### 🏠 Home Page

The landing page provides users with an easy way to discover hotels and navigate through the application.

### 🔎 Search Results

Users can search and explore hotels according to their requirements.

### 🏨 Hotel Details

Provides detailed information about a selected hotel before making a booking.

### 📅 My Bookings

Users can access their booking information from the booking section.

### ❤️ Favorites

Users can save hotels they are interested in and access them later.

### 🏢 Hotels

Displays the available hotel listings in the application.

### 🔐 Authentication

Provides the authentication interface for users.

### ℹ️ About

Contains information about the hotel booking platform.

---

## 🛠️ Tech Stack

### Frontend

- ⚛️ **React 18**
- 📘 **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🧩 **Shadcn/Radix UI**
- 🛣️ **React Router DOM**
- 🔄 **TanStack React Query**
- 📝 **React Hook Form**
- ✅ **Zod**
- 🎯 **Lucide React Icons**

### Backend / Database

- 🟢 **Supabase**

### Development Tools

- 📦 **npm**
- 🔧 **ESLint**
- 🐙 **Git & GitHub**

The repository's package configuration confirms React, TypeScript, Vite, Tailwind CSS, Supabase, React Router, React Query, React Hook Form, Zod, and several Radix UI components.

---

## 🏗️ Project Structure

```text
Hotel-Booking-System/
│
├── public/
│   └── Static assets
│
├── src/
│   ├── components/
│   │   └── Reusable UI components
│   │
│   ├── contexts/
│   │   └── Authentication context
│   │
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── SearchResults.tsx
│   │   ├── HotelDetails.tsx
│   │   ├── Bookings.tsx
│   │   ├── Favorites.tsx
│   │   ├── Hotels.tsx
│   │   ├── About.tsx
│   │   ├── Auth.tsx
│   │   └── NotFound.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── supabase/
│   └── Supabase configuration
│
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── README.md
```

The current application routing includes the home page, search results, hotel details, bookings, favorites, hotels, about, authentication, and a not-found route.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/JAYASURYA-5/Hotel-Booking-System.git
```

### 2️⃣ Navigate to the Project

```bash
cd Hotel-Booking-System
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the project root and add your Supabase configuration:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> ⚠️ Never upload private credentials, service-role keys, or other sensitive secrets to GitHub.

### 5️⃣ Start the Development Server

```bash
npm run dev
```

The application will be available through the local Vite development server.

---

## 📜 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run build:dev` | Create development-mode build |
| `npm run lint` | Check code using ESLint |
| `npm run preview` | Preview production build |

These scripts are defined in the repository's `package.json`.

---

## 🗄️ Database

The project uses **Supabase** for backend/database functionality.

The application includes a dedicated `supabase` directory and uses the Supabase JavaScript client through:

```text
@supabase/supabase-js
```

This allows the frontend application to communicate with the configured Supabase backend.

---

## 🎨 UI & Design

The application focuses on a clean and modern hotel-booking experience.

### Design Highlights

- ✨ Modern interface
- 📱 Responsive layout
- 🧩 Reusable components
- 🎨 Tailwind CSS styling
- 🖱️ Smooth navigation
- ❤️ Favorites interaction
- 📅 Booking-oriented user flow
- 🔐 Authentication interface
- ⚡ Fast Vite development experience

---

## 🔄 User Journey

```text
Visit Website
      ↓
Explore Hotels
      ↓
Search / Filter
      ↓
Select Hotel
      ↓
View Hotel Details
      ↓
Login / Authenticate
      ↓
Make Booking
      ↓
View Booking
      ↓
Save Favorite Hotels
```

---

## 🌐 Live Demo

🚀 Try the deployed application:

### 👉 [Hotel Booking System](https://hotel-booking-system-steel.vercel.app/)

---

## 📸 Screenshots

You can add your project screenshots here:

```markdown
## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshots/home.png)

### 🔍 Search Results
![Search Results](screenshots/search.png)

### 🏨 Hotel Details
![Hotel Details](screenshots/hotel-details.png)

### 📅 Booking Page
![Booking](screenshots/booking.png)
```

> Create a `screenshots` folder in the repository and place your screenshots inside it.

---

## 🔮 Future Enhancements

Some possible improvements for future versions:

- 💳 Online payment integration
- 📧 Booking confirmation emails
- ⭐ Hotel reviews and ratings
- 🗺️ Interactive hotel maps
- 🔔 Booking notifications
- 🧑‍💼 Admin dashboard
- 🏨 Hotel owner management panel
- 📊 Booking analytics
- 🔎 Advanced filtering and sorting
- 🌍 Multi-language support
- 📱 Dedicated mobile application
- 🤖 AI-powered hotel recommendations

---

## 🎯 Project Objectives

- Build a modern hotel reservation platform.
- Provide an easy hotel discovery experience.
- Simplify the hotel booking process.
- Implement user authentication.
- Provide personalized favorites.
- Manage booking-related information.
- Develop a responsive and user-friendly interface.
- Practice modern React and TypeScript development.

---

## 💡 What I Learned

Through this project, I gained practical experience in:

- React component development
- TypeScript application development
- React Router navigation
- State and data management
- Supabase integration
- Authentication workflows
- Responsive UI development
- Tailwind CSS
- Form handling and validation
- Reusable component design
- Git and GitHub project management

---

## 👨‍💻 Developer

<div align="center">

### **Jayasurya K**

**Full Stack Developer | React Developer | Software Developer**

🔗 GitHub: [JAYASURYA-5](https://github.com/JAYASURYA-5)

🌐 Portfolio: [jayasurya6.netlify.app](https://jayasurya6.netlify.app/)

</div>

---

## ⭐ Support

If you found this project useful or interesting:

⭐ **Give this repository a star**

🍴 **Fork the repository**

🐛 **Report issues**

💡 **Suggest improvements**

---

<div align="center">

### 🏨 Hotel Booking System

**Discover • Choose • Book • Enjoy**

Made with ❤️ by **Jayasurya K**

</div>
