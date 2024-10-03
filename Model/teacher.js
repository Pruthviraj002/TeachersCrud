const mongoose = require("mongoose")

const techSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact: { type: Number, required: true },
    qualification: {type:String,required:true},
    salary:{type:Number,required:true},
    department:{type:String,required:true},
    // designation:{type:String,required:true},
    address:{type:String,required:true},

    staffMember:{type:mongoose.Schema.ObjectId,
        ref:"staff"
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("myTeacher",techSchema)