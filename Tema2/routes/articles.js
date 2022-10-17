const express = require('express');
const router = express.Router();
const articleSchema = require('../models/articles');

//200 -- OK (all's good)
//201 -- Succes (succesfully created an object)

//500 -- sv side error (bad connection string)
//400 -- client side error (bad params, body)

//GET all
router.get('/', async (req, res) => {
    try{
        const articles = await articleSchema.find();
        //find -- return all docs if we do not give any params
        res.status(200).json(articles);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
   
})


//GET one  -- name
router.get('/:name', (req, res) => {
    
})

//POST
router.post('/', async (req, res) => {
    const article = new Articles({ 
        Article_name: req.body.article_name,
        Article_no: req.body.article_no,
        Article_short_description: req.body.article_short_description
    });

    try{
        const newArticle = await article.save();
        // save -- add/update new doc to db
        res.status(201).json(newArticle);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

//Put
router.put('/', (req, res) => {
    
})

//DELETE
router.delete('/', (req, res) => {
    
})

module.exports = router;