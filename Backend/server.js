const dotenv=require("dotenv");
dotenv.config();
const express=require('express');
const cors=require('cors');
const resumeRoutes = require("./routes/resumeRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const fs=require("fs");

dotenv.config();

const app=express();

app.use(cors());
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api/resume", resumeRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req,res) => {
    res.send("API is working");
});

const port=process.env.PORT || 5000;

if(!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

app.listen(port, () => {
 console.log(`app is running on port ${port}`);
});