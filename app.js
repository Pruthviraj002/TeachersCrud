const Teachers = require("./Route/techRoute")
const StaffRoute = require("./Route/staffRoute")
const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Welcome to the server")
})

app.use("/api/teachers",Teachers)
app.use("/api/staff",StaffRoute)

app.listen(process.env.PORT || 5002)
 async function db() {
    try {
        const res = await  mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
 }

 db()