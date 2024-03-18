import mongoose from "mongoose";

const Schema = mongoose.Schema;

const exporterSchema = new Schema ({
    name:{
        type: String,
        required : true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    containers:[{
        type:mongoose.Types.ObjectId,
        ref:"Container",
        required:true
    }]

})

export default mongoose.model("Exporter",exporterSchema)