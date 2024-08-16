# E-Commerce Web Application

![React](https://img.shields.io/badge/React-18.0.0-blue.svg) ![License](https://img.shields.io/badge/License-MIT-green.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [Client-Side Features](#client-side-features)
  - [Admin-Side Features](#admin-side-features)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

**E-Commerce Web Application** is a full-featured online shopping platform built with React for the frontend and Express.js for the backend. The app provides a seamless shopping experience for users and powerful management tools for administrators.

## Features

### Client-Side Features

- **User Authentication:** Users can register, log in, and log out securely.
- **Product Browsing:** Users can view all available products on the website.
- **Shopping Cart:** Users can add products to their cart and proceed to order.
- **Order Management:** Users can place orders and view their order status (e.g., delivered, processing).
- **Payment Integration:** Stripe is integrated as a payment gateway for secure transactions.

### Admin-Side Features

- **Product Management:** Admins can add, delete, and update products in the inventory.
- **Order Tracking:** Admins can view which users ordered specific items.
- **Order Status Management:** Admins can update the status of orders (e.g., processing, delivered).

## Tech Stack

### Frontend

- **React.js:** For building the user interface.
- **Axios:** For making HTTP requests from the client-side.
- **React-Toastify:** For displaying notifications and alerts to users.

### Backend

- **Express.js:** As the server-side framework.
- **bcrypt:** For hashing and securing user passwords.
- **chalk:** For styling and customizing console output.
- **cors:** For enabling cross-origin resource sharing.
- **dotenv:** For managing environment variables.
- **jsonwebtoken:** For secure user authentication via tokens.
- **mongoose:** For interacting with the MongoDB database.
- **multer:** For handling file uploads.
- **nodemon:** For automatically restarting the server during development.
- **Stripe:** For processing payments securely.
- **validator:** For validating and sanitizing user input.
- **body-parser:** For parsing incoming request bodies.

## Installation

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- MongoDB (for database)

### Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Install Dependencies

```bash
# Install server-side dependencies
npm install

# Install client-side dependencies
cd client
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Running the Application

```bash
# Run the server
npm run dev

# Run the frontend
cd client
npm start
```

## Usage

- **Client-Side:** Open the app in your browser at `http://localhost:3000`. You can register or log in, browse products, add them to your cart, and make payments.
- **Admin-Side:** Access the admin panel to manage products and orders.

## Scripts

- **`npm run dev`:** Runs the backend server with nodemon.
- **`npm start`:** Starts the React frontend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

