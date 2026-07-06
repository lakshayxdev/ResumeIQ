const dotenv=require("dotenv");
dotenv.config();
const express=require('express');
const cors=require('cors');
const resumeRoutes = require("./routes/resumeRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const fs=require("fs");
const dashboardRoutes=require("./routes/dashboardRoutes");
const historyRoutes=require("./routes/historyRoutes");

dotenv.config();

const app=express();

app.use(cors());
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api/resume", resumeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/history", historyRoutes);

app.get("/", (req,res) => {
    res.send("API is working");
});

const port=process.env.PORT || 5000;

if(!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

app.get("/", (req, res) => {
  res.send("ResumeIQ Backend is Running ");
});

app.listen(port, () => {
 console.log(`app is running on port ${port}`);
});