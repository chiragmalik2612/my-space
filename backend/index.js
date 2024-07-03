require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const taskRoutes = require("./routes/myTasksRoutes");
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors()); 

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


app.options('*', cors()); 

// Routes
app.use("/api/myTasks", taskRoutes);
app.use('/api/user', userRoutes)


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");

    app.listen(process.env.PORT, () => {
      console.log("Listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
