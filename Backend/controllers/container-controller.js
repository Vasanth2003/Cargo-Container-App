
import Exporter from "../models/Exporter";
import Container from "../models/Container";
import mongoose from "mongoose";

export const getAllContainers = async(req,res,next)=>
{
    let containers;
    try{
        containers = await Container.find({})
    }catch(err)
    {
        console.log(err);
    }
    if(!containers)
    {
       return  res.status(404).json({message:"Empty"})

    }
    return res.status(200).json({containers})
}


export const addContainers=async (req,res,next)=>
{
    const {name,volume,price,time,user}=req.body;
    let existingUser;
    try{
        existingUser=await User.findById(user);
    }catch(err)
    {
        return console.log(err)
    }
    if(!existingUser)
        return res.status(400).json({message:"Unable to Find user by This ID"})
    let container = new Blog({
        name,
        volume,
        price,
        time,
        user
    });

    try{
        const session= await mongoose.startSession();
        session.startTransaction();
        await container.save({session});
        existingUser.blogs.push(blog);
        await existingUser.save({session})
        await session.commitTransaction();
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({message:"No"});

    }

    return res.status(200).json({container});
}


export const updateContainer= async(req,res,next)=>{
    const containerId=req.params.id;
    const {name,volume,price,time}=req.body;
    let container;
    try{
            container=await Container.findByIdAndUpdate(containerId,{
            name,
            volume,
            price,
            time
        });
    }catch(err){
    return console.log(err);
   }

   if(!container)
   {
    return res.status(500).json({message:"Unable to Update"})
   }
   return res.status(200).json({container});
    

};


export const deleteById = async(req,res,next)=>
{
    const id=req.params.id;
    let container;
    try
    {
        container = await Container.findByIdAndRemove(id).populate('user');
        await container.user.containers.pull(container);
        await container.user.save( )
    }catch(err)
    {
        console.log(err)
    }
    if(!container)
    {
        return res.status(404).json({message:"No Container Found"});
    }
    return res.status(200).json({message:"Deleted Succesfully"})

}

export const getByContainerByDestination =async (req,res,next) =>{
    const containerId = req.params.ID
    const {destination} =req.body;
    let container;
    try{
        container=await Container.findById({containerId})
    }
    catch(err)
    {
        console.log(err)
    }
}

