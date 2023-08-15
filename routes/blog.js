const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogdata')
router.get("/",(req,res)=>{
    res.render("../views/home.handlebars")
})
router.get('/blogs',(req,res)=>{
    res.render('../views/blog.handlebars',{
        blogs:blogs
    })
})
router.get('/blogs/:slug',(req,res)=>{
    const myblogs = blogs.filter((e)=>{
        return e.slug===req.params.slug
    })
    if (myblogs.length>0) {
        res.render('../views/blogslug.handlebars',{
            title:myblogs[0].title,
            content:myblogs[0].content
        })
    }
    else{
        res.send('Blog is not found')
    }


})
module.exports=router