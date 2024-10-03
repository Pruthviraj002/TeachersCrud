const {getStaff,postStaff,putStaff,deleteStaff} =require("../Controller/staffCon")
const auth = require("../Middleware/auth")

const route = require("express").Router()
route.get("/",getStaff)
route.post("/",auth,postStaff)
route.put("/:id",auth,putStaff)
route.delete("/:id",auth,deleteStaff)

module.exports = route