import express from "express";
import mongoose from "mongoose";
import exporterRouter from "./routes/exporter-routes.js"
import cors from 'cors';  


const PORT=4000;
const app=express();
app.use(express.json());  
app.use(cors(
  {
    credentials :true,
    origin:'http://localhost:5173',
  }
));

app.use('/api/exporter',exporterRouter);



mongoose.connect("mongodb+srv://vasanth:THIyQOORHc5sORBW@container.tvhnwav.mongodb.net")
//mongoose.connect("mongodb+srv://vasanth:THIyQOORHc5sORBW@cluster0.nvlrztx.mongodb.net/?retryWrites=true&w=majority")

.then(()=>app.listen(PORT),
console.log("Connected to PORT"))
.then(()=>
console.log("Connected to Database"))
.catch((err) => console.log(err));

// app.use('/api/container',containerRouter);
// app.use('/api/user',userRouter);














