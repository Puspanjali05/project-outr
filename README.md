# Project Name

## Overview

This project is a full-stack application with a client and server component. The client is built with React and uses Vite for development and build processes. The server is built with Node.js and Express, and it connects to a MongoDB database.

## Project Structure

## Client

The client is a React application bootstrapped with Vite. It uses Tailwind CSS for styling and includes several components and hooks.

### Key Files and Directories

- `src/`: Contains the source code for the React application.
  - `App.jsx`: The main application component.
  - `components/`: Contains reusable React components.
    - `Forms/`: Contains form components.
    - `Home.jsx`: Home page component.
    - `Landing.jsx`: Landing page component.
  - `Hooks/`: Contains custom React hooks.
    - `getData.js`: A custom hook for fetching data.
  - `index.css`: Global CSS file.
  - `main.jsx`: Entry point for the React application.
- `public/`: Contains public assets.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `vite.config.js`: Vite configuration file.

### Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `lint`: Runs ESLint to check for linting errors.
- `preview`: Previews the production build.

## Server

The server is a Node.js application using Express. It handles API requests, connects to a MongoDB database, and includes JWT-based authentication.

### Key Files and Directories

- `controllers/`: Contains controller files for handling requests.
  - `user.controller.js`: Controller for user-related operations.
- `dbconfigs/`: Contains database configuration files.
  - `db.config.js`: MongoDB configuration.
- `middlewares/`: Contains middleware functions.
  - `JWT.js`: Middleware for handling JWT authentication.
- `models/`: Contains Mongoose models.
  - `user.model.js`: Mongoose model for user data.
- `routes/`: Contains route definitions.
  - `routes.js`: Defines API routes.
- `socket/`: Contains WebSocket-related code.
  - `socket.js`: WebSocket server setup.
- `utils/`: Contains utility functions.
  - `hash.js`: Utility for hashing data.

### Environment Variables

The server uses environment variables defined in a `.env` file. Make sure to create this file with the necessary variables, such as `JWT_SECRET`.

### Scripts

- `start`: Starts the server.

## Installation

1. Clone the repository.
2. Navigate to the `client` directory and run `npm install` to install client dependencies.
3. Navigate to the `server` directory and run `npm install` to install server dependencies.

## Usage

### Running the Client

Navigate to the `client` directory and run:

```sh
npm run dev
```

# Server

## Overview

This server is built with Node.js and Express. It handles API requests, connects to a MongoDB database, and includes JWT-based authentication. Additionally, it supports WebSocket connections using Socket.IO.

## Key Files and Directories

- `controllers/`: Contains controller files for handling requests.
  - [`user.controller.js`](controllers/user.controller.js): Controller for user-related operations.
- `dbconfigs/`: Contains database configuration files.
  - [`db.config.js`](dbconfigs/db.config.js): MongoDB configuration.
- [`index.js`](index.js): Entry point for the server.
- `middlewares/`: Contains middleware functions.
  - [`JWT.js`](middlewares/JWT.js): Middleware for handling JWT authentication.
- `models/`: Contains Mongoose models.
  - [`user.model.js`](models/user.model.js): Mongoose model for user data.
- `routes/`: Contains route definitions.
  - [`routes.js`](routes/routes.js): Defines API routes.
- `socket/`: Contains WebSocket-related code.
  - [`socket.js`](socket/socket.js): WebSocket server setup.
- `utils/`: Contains utility functions.
  - [`hash.js`](utils/hash.js): Utility for hashing data.

## Environment Variables

The server uses environment variables defined in a `.env` file. Make sure to create this file with the necessary variables, such as `MONGO_URI` and `JWT_SECRET`.

Example `.env` file:

## Installation

1. Clone the repository.
2. Navigate to the `server` directory.
3. Run `npm install` to install server dependencies.

## Usage

### Running the Server

Navigate to the `server` directory and run:

```sh
npx nodemon
```
