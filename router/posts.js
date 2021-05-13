const { response } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/',async(req,res)=>{
    try{
        const data = await Post.find()

        res.status(200).send({response:data})
    }catch(err){
        res.status(500).send({response:err})

    }

});
router.post('/',async(req,res)=>{
    try{
        const data = await new Post({
            title:req.body.title,
            description:req.body.description
        }).save();
        res.status(200).send({response:data})
    }catch(err){
        res.status(500).send({response:err})

    }
});


module.exports = router;