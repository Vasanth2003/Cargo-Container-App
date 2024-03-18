import express from "express";
import bcrypt from "bcryptjs"
import Exporter from "../models/Exporter.js"
import Container from "../models/Container.js"
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";
const jwtSecret = 'jhjgfiewilyr73erfyhuefhue';

const app=express();
app.use(express.json());  
app.use(cookieParser())


export const getAllExporters = async (req,res,next)=>
{
    let exporters;
    try{
        exporters = await Exporter.find()
    }catch(err)
    {
        console.log(err);
    }

    if(!exporters)
    {
        return res.status(404).json({message: "Exporters Not Found"});
    }
    return res.status(200).json({exporters});
}


export const signup =async (req,res,next)=>
{
    const {name,email,password}=req.body;
    let existingUser;
    try{
        existingUser = await Exporter.findOne({email}) 
    
    }catch(err){
       return console.log(err);
    }

    
    if(existingUser)
    {
        return res.status(404).json({message:"Account Already Registered,Please Login"})
    }
    
    const hashedPassword = bcrypt.hashSync(password);
    

    const exporter = new Exporter({
        name,
        email,
        password:hashedPassword,
        containers:[]
    })

    try{
        await exporter.save()
    }catch(err)
    {
        console.log(err)
    }
    return res.status(404).json({exporter})
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
      existingUser = await Exporter.findOne({ email });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  
    if (!existingUser) {
      return res.status(404).json({ message: "User Not Found" });
    }
  
    const isPasswordValid = bcrypt.compareSync(password, existingUser.password);
  
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }
  
    const token = jwt.sign({ 
        email: existingUser.email, 
        _id: existingUser._id ,
        name:existingUser.name
},
 jwtSecret);
  
    // Set the JWT as a cookie
    res.cookie('jwt', token, { httpOnly: true, secure: true });
  
    return res.status(200).json({ message: "Logged In Successfully" });
  };
  


  export const profile = (req, res) => {
    const token = req.cookies;
  
    if (token)
     {
      jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
          // Handle the JWT verification error here
          res.status(401).json({ message: 'Unauthorized' });
        } else {
          // Token is valid, send the user data
          res.json(user);
        }
      });
    } else {
      res.json(null);
    }
  };
  

export const logout = (req,res)=>{
  res.cookie('token','').json(true);
}











