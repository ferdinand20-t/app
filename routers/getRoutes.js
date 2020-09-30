const {home,about ,
    getpost,login,
    post,getpostById, deleteById } = require('./../controllers/controls');
const express = require('express')
const router = express.Router();


// router for the [home] page
router.get('/',home)

// router for the [about] page
router.get('/about',about)

// router for the [login] page
router.get('/login',login)
// router for the [posts] page
router.get('/posts',getpost)

// router for the [posting] request
router.post('/post',post) 

// route to [delete] a post
router.delete('/posts/:id',deleteById)

// route for a [particular] post
router.get('/posts/:id',getpostById)

router.get('/post',(req,res)=> {res.redirect('/') })

module.exports = router;
