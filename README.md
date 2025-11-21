# Coupon Management System - Frontend

## Project Overview
This is the **React frontend** for the Coupon Management System.  
It provides a modern UI to create coupons, view all coupons, and find the best eligible coupon for a given user/cart.  
The frontend interacts with the backend API hosted on `http://localhost:5000`.

---

## Tech Stack
- **Language:** JavaScript (ES6+)  
- **Framework:** React.js  
- **Libraries:** Tailwind CSS, Axios, React Router DOM  

---

## How to Run

### Prerequisites
- Node.js 18+  
- npm (Node Package Manager)  

### Setup Steps
1. Open terminal and navigate to frontend folder:
```bash
Install dependencies:

bash
Copy code
npm install
Start the Copon-Ui-frontend:

bash
Copy code
npm start
The app runs on: http://localhost:3000

Features / Demo
Demo Login (Hardcoded User)
Email: hire-me@anshumat.org

Password: HireMe@2025!

Functionalities
Create Coupons: Add coupons with detailed eligibility rules (user tiers, countries, first order only, cart value, categories, etc.).

Get Best Coupon: Evaluate all coupons for a given user/cart and find the best discount.

View All Coupons: Lists all created coupons in a modern responsive UI.

AI Usage Note
Used ChatGPT to assist in:

Structuring React components

Improving Tailwind CSS UI

Designing frontend logic for API interaction and form handling

Prompts included:
"Build a React frontend for a coupon management system with Create, List, and Best Coupon features using Tailwind CSS and Axios."

Notes for Reviewer
Fully responsive and modern UI using Tailwind CSS.

Integrates seamlessly with backend API.

All features functional with the demo hardcoded user.