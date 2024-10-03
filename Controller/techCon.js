const bcrypt = require("bcrypt")
const teacherCon = require("../Model/teacher")
const jwt= require("jsonwebtoken")
exports.getTeacher = async (req,res)=>{
    try {
        const data = await teacherCon.find()
        return res.json({errors:false,data:data})
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.postTeacher =  async (req,res)=>{
    try {
        const teacherExist = await teacherCon.findOne({email:req.body.email})
        if(teacherExist) return res.status(400).json({errors:true,message:"user already exists!"})

            req.body.password = await bcrypt.hash(req.body.password,10)

      const data = await teacherCon.create(req.body)
      return res.json({errors:false,data:data})  
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res)=>{
    try {
        const teacherExist = await teacherCon.findOne({email:req.body.email})

        if(!teacherExist) return res.status(400).json({errors:true,message:"email or password is invalid"})

            
            const validPassword = await bcrypt.compare(req.body.password,teacherExist.password)
        if(!validPassword) return res.status(400).json({errors:true,message:"email or password is invalid"})

            const token = await jwt.sign({_id:teacherExist._id},process.env.SEC)
            return res.json({errors:false,data:{user:teacherExist,token:token}})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}