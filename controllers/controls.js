 const uuid = require('uuid')
 const express = require('express')
 const router = express.Router();
 const form = require('./../model/html')

let posts = []
let users = [{ firstname: 'ferdinand', lastname: 'tewom' }]

const home = (req,res, next)=>{
    res.send('<h1> WELCOME HOME</h1>');
}
const about = (req,res)=>{
    res.send('<h1> WELCOME post</h1>')
}
const login = (req,res)=>{
    res.send(form)
    if(req.query){
    let request = users.find((person)=>person.firstname===req.query.firstname)
    console.log(request)
    }
}

const getpost = (req,res)=>{
    res.send(posts)
}
const post = (req,res)=>{
    posts.push(req.body)
    console.log(req.body)

res.send(req.body)}

const getpostById = (req,res)=>{
    let filtered = posts.find((person)=>person.id===parseInt(req.params.id))
    res.send(filtered)
    console.log(filtered)
}

const deleteById = (req,res)=>{
    posts = posts.filter((person)=>person.id!==parseInt(req.params.id))
    res.send(posts)
    console.log(posts)
}




module.exports = {home, about, getpost,login,post,getpostById,deleteById }