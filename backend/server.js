const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const colors = require("colors");
const testRoutes = require("./routes/testRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js")


const app = express();

//dotenv config
dotenv.config();

connectDB();

//middlewares 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`.white.bgGreen);
});