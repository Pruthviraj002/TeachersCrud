const jwt = require("jsonwebtoken")

module.exports = async (req,res,next)=>{
    try {
        const token = req.header("auth-token")

        const verifyToken = await jwt.verify(token,process.env.SEC)
        if(!verifyToken) return res.status(400).json({errors:true,message:"verify token is invalid"})
            next()

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}