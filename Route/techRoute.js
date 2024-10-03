const {getTeacher,postTeacher, login}=require("../Controller/techCon")


const route = require("express").Router()

route.get("/",getTeacher)
route.post("/",postTeacher)
route.post("/login",login)

module.exports = route

