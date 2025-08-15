URL Shortener

A simple and efficient URL shortening service built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows users to shorten long URLs into compact, shareable links and redirect them instantly.

🚀 Features

Shorten URLs — Convert long links into short, unique URLs.

Custom Short Codes — Option to create personalized short links.

Redirect Functionality — Short links redirect to the original URL.

Click Tracking — Monitor the number of times a short link is accessed.

Responsive UI — Works seamlessly on desktop and mobile.

REST API Support — API endpoints for programmatic access.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS (or your styling choice)
Backend: Node.js, Express.js
Database: MongoDB (MongoDB Atlas for cloud storage)
Other Tools: Mongoose, Postman (for API testing)

📂 Project Structure
url-shortener/
│── client/           # React frontend
│── server/           # Node.js backend
│   ├── routes/       # API routes
│   ├── models/       # Mongoose models
│   ├── controllers/  # Business logic
│── .env              # Environment variables
│── package.json
│── README.md
