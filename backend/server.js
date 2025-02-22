const express= require("express")
const port=4000
const cors=require("cors")
const app=express()
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`server is running in the port http://localhost:${port}`)
})