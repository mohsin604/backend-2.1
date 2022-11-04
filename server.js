// block strat
const express=require('express')
const variable=require('./configration/variable')
// block end 

// block 2
 
const app= express()
 app.use(express.urlencoded({extended:true}))


 const PORT=process.env.PORT



 app.all('*',(req,res,next) => {
    console.log(req.body)
    res.header('Access-Control-Allow-Origin','*')
 })

 