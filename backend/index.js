require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS

const taskRoutes = require("./routes/myTasksRoutes");

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS globally

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Route for handling OPTIONS preflight requests
app.options('*', cors()); // Enable CORS for all OPTIONS requests

// Routes
app.use("/api/myTasks", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");
    // Listen to port
    app.listen(process.env.PORT, () => {
      console.log("Listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
