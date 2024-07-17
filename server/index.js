import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import User from "./models/User.js"
import Transaction from "./models/Transaction.js"


const app = express();
app.use(express.json());

app.use(cors());

// connect to MongoDB

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    if(conn){
        console.log("MongoDB connected📦");
    }

}
connectDB();

app.get("/", (req, res)=>{
    res.json({
        message: "API is running"
    })
})

app.post("/signup", async(req, res)=>{
    const {fullName , email, password, dob  } = req.body;

    const user = new User({
        fullName,
        email,
        password,
        dob: new Date(dob) 
    });

    try{
    const savedUser = await user.save();

    res.json({
        success: true,
        message: "Signup successfully",
        data: savedUser
    })
}
catch(e){
    res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
})

app.post("/login", (req, res)=>{

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})