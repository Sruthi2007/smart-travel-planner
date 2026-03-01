# Smart Travel Planner - Learning Notes

## Day 1
- Installed Node.js
- Created React app using Vite
- Learned folder structure
- Created Home component

## Day 2
- Installed Tailwind CSS
- Configured tailwind.config.js
- Created Navbar component
- Built Hero section
- Made navbar sticky
- Learned flexbox centering and screen height utilities

## Day 3

Installed and used react-router-dom
Implemented client-side routing in React
Created multiple pages (Home, Login, Register, Dashboard)
Configured routes using <Routes> and <Route>
Used <BrowserRouter> to enable routing
Navigated between pages using <Link>
Understood route path matching (/ vs /home)
Fixed import error by using named imports

## Day 4

✅ Build Login form
✅ Build Register form
✅ Understand controlled inputs
✅ Use useState properly
✅ Handle form submission

## Day 5

✅ Understand what an API is (bridge between frontend and backend).
✅ Install Axios  (library for making HTTP requests)
✅ Send data from Login & Register form to backend
✅ Handle API response
✅ Show success/error message
---> "I used Axios to send form data from React frontend to backend APIs using async/await and handled responses using try-catch blocks."4

## Day 6 

✅ Create backend folder
✅ Initialize Node project
✅ Install Express
✅ Create server
✅ Create login & register API routes
✅ Test APIs

🔹 1️⃣ Import Packages
  ## In backend
import express from "express";
import cors from "cors";
What is happening?

express → framework to build server

cors → allows frontend (different port) to talk to backend

Without CORS, browser blocks requests.

🔹 3️⃣ Middleware Setup
  app.use(cors());
  app.use(express.json());
  What is Middleware? Middleware = functions that run before request reaches route.

 --> "I built an Express server with modular routing, implemented middleware for JSON parsing and CORS, and created authentication endpoints that communicate with the React frontend using Axios."

## Day 7 Goals


✅ Create MongoDB Atlas account
✅ Create cloud database
✅ Connect MongoDB to backend
✅ Create User model
✅ Save users on register
✅ Validate login from database

--> "I connected MongoDB Atlas with Node.js using Mongoose, created user schema and models, implemented registration and login APIs, and connected them to a React frontend using Axios."


## Day 8

✅ Password stored as hash
✅ Login compares hash
✅ Plain password never stored
✅ Production-ready authentication base

WHAT IS HASHING?

Hashing converts:

123456

Into:

$2b$10$k9uF3xZk...randomstring

Important:

It cannot be reversed

It is one-way encryption

Even you cannot see original password

🧠 WHAT IS BCRYPT?

bcrypt is a library that:

✔ Hashes passwords
✔ Adds salt automatically
✔ Compares hashed passwords safely

---> STEP 1 — Install bcrypt

Inside backend:

npm install bcrypt

.

## DAY 9 — JWT Authentication (Token-Based Auth)
🧠 WHAT IS JWT?

JWT = JSON Web Token

It is:

A secure string generated after login

Contains encoded user data

Signed with a secret key

Sent to frontend

Used to verify identity

✅ Install jsonwebtoken
✅ Generate token on login
✅ Send token to frontend
✅ Create auth middleware 
✅ Protect routes

🧩 STEP 1 — Install JWT

Inside backend:

       npm install jsonwebtoken

🧩 STEP 2 — Add JWT Secret to .env

Inside backend/.env:

JWT_SECRET=my_super_secret_key_123

⚠️ In real production, this must be long and random.

DAY 9 CHECKLIST

☑ jsonwebtoken installed
☑ Token generated
☑ Middleware created
☑ Protected route working

## Day 10 — Connect JWT to Frontend & Protect Dashboard 🔐

🎯 DAY 10 GOALS

By end of today:

✅ Save JWT after login
✅ Store token in localStorage
✅ Send token with API requests
✅ Protect Dashboard page
✅ Redirect unauthorized users