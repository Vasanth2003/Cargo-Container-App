import mongoose from "mongoose";

const Schema = mongoose.Schema;

const containerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    volume:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    photos:[String],
    time:{
        type:Number,
        required:true
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref:"Exporter",
        required:true
    },
})

export default mongoose.model("Container",containerSchema);