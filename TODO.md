# TODO: Run Food Delivery Project

## Install Dependencies
- [x] Install backend dependencies: cd backend && npm install
- [x] Install frontend dependencies: cd frontend && npm install
- [x] Install admin dependencies: cd admin && npm install

## Setup Environment Variables
- [x] Create backend/.env file with MONGO_URL, JWT_SECRET, SALT, STRIPE_SECRET_KEY

## Update URLs for Local Development
- [x] Update frontend/src/context/StoreContext.jsx: set url to "http://localhost:4000"
- [x] Update admin/src/App.jsx: set url to "http://localhost:4000"
- [x] Update backend/controllers/orderController.js: set frontend_url to "http://localhost:5173" (assuming frontend runs on port 5173)

## Start Servers
- [x] Start backend server: cd backend && npm run server
- [x] Start frontend server: cd frontend && npm run dev
- [x] Start admin server: cd admin && npm run dev
