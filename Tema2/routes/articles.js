require('dotenv').config()
const express = require('express');
const router = express.Router();
const articleSchema = require('../models/articles');


//200 -- OK (all's good)
//201 -- Succes (succesfully created an object)

//500 -- sv side error (bad connection string)
//400 -- client side error (bad params, body)
//404 -- not found

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
router.get('/:name', getArticleNAME, (req, res) => {
  res.status(200).json(res.article);
    
})

//POST
router.post('/', async (req, res) => {
    const article = new articleSchema({ 
        //este interesant ca daca testez cu REST client, imi gaseste body-ul gol
        //insa in postman, totul este ok
        Article_name: req.body.Article_name,
        Article_no: req.body.Article_no,
        Article_short_description: req.body.Article_short_description
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
router.put('/:id', getArticleID, async (req, res) => {
   try{ 
    
    const updatedArticle = await articleSchema.updateOne({_id : res.article._id}, req.body);
    res.status(201).json({message: "Updated Article"});
}
   catch(err){
     res.status(500).json({message: err.message});
    }
})

//DELETE
router.delete('/:id', getArticleID, async (req, res) => {
    try{
        await res.article.remove();
        res.status(201).json({message: 'Deleted succesfully!'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})


//middleware
async function getArticleID(req, res, next){
let article;
try{
    article = await articleSchema.findById(req.params.id);
    // findById -- find docs by id
    if(article == null){
        return res.status(404).json({message: 'Article not found'})
    }
}
catch(err){
return res.status(500).json({message: err.message})
}

    res.article = article;
    next();  //move on
}

async function getArticleNAME(req, res, next){
    let article;
    try{
        article = await articleSchema.findOne({"Article_name": req.params.name});
        //findOne -- return the first doc that contain the object form params
        if(article == null){
            return res.status(404).json({message: 'Article not found'})
        }
    }
    catch(err){
    return res.status(500).json({message: err.message})
    }
    
        res.article = article;
        next();  //move on
    }

module.exports = router;