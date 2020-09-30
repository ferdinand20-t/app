const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyparser = require('body-parser')
const router = require('./routers/getRoutes')

// initialize the app
const app = express();


//middlewears
app.set('port',(process.env.Port||1000))
app.use(bodyparser.json())
app.use('/',router)
app.all('/secret',(req,res,next)=>{
    console.log('hello');
    next()
},(req,res,next)=>{
    res.send('hello')
    next()
})



const Port = process.env.Port || 1000;

app.listen(app.get('port'), ()=> console.log(`server running on port ${app.get('port')}`))
