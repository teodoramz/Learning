require('dotenv').config()
const express = require('express');
const router = express.Router();
const tokensSchema = require('../models/tokens');


router.get('/', async (req, res) => {
    try{
        const tokens = await tokensSchema.find();
        res.status(200).json(tokens);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
   
})

router.get('/:id', getTokensID, (req, res) => {
    try{
        //const ceva = {token1: res.token, token2: res.token }
        res.status(200).json(res.token);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
    
})

router.post('/', async (req, res) => {
    const token = new tokensSchema({ 
        Token_body: req.body.Token_body
    });
    try{
        const newToken = await token.save();
        res.status(201).json(newToken);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})


router.put('/:id', getTokensID, async (req, res) => {
    try{ 
     
     const updatedToken = await tokensSchema.updateOne({_id : res.token._id}, req.body);
     res.status(201).json({message: "Updated Token"});
 }
    catch(err){
      res.status(500).json({message: err.message});
     }
 })
 
 
 router.delete('/:id', getTokensID, async (req, res) => {
     try{
         await res.token.remove();
         res.status(201).json({message: 'Deleted succesfully!'});
     }
     catch(err){
         res.status(500).json({message: err.message});
     }
 })

async function getTokensID(req, res, next){
    let token;
    try{
        token = await tokensSchema.findById(req.params.id);
        // findById -- find docs by id
        if(token == null){
            return res.status(404).json({message: 'Token not found'})
        }
    }
    catch(err){
    return res.status(500).json({message: err.message})
    }
    
        res.token = token;
        next();  //move on
    }

module.exports = router;