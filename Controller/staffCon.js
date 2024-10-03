const staffController = require("../Model/stafe")
exports.getStaff = async (req,res)=>{
    try {
        const data = await staffController.find()
        return res.json({errors:false,data:data})
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.postStaff = async (req,res)=>{
    try {
      const data = await staffController.create(req.body)
      return res.json({errors:false,data:data})  
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.putStaff = async (req,res)=>{
    try {
        const data = await staffController.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}

exports.deleteStaff = async (req,res)=>{
    try {
        const data = await staffController.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}