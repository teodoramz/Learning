require('dotenv').config()
const express = require('express');
const router = express.Router();
const articlesSchema = require('../models/articles');
const categoriesSchema = require('../models/categories');


const idFunctions = require('../middlewares/routesFunc');

// get dupa un tokenID

router.get('/:id', idFunctions.getTokensID, async (req, res) => {
    try{
        //const ceva = {token1: res.token, token2: res.token }
        const articleCat = [];
        const articlesTk = await articlesSchema.find({Article_tokensIDs: { $all: [req.params.id]}})
        let category;
        for(i = 0; i<articlesTk.length; i++) {
            // inlocuiesc si id-ul de categorie cu numele 
             category = await categoriesSchema.findById(articlesTk[i].Article_categoryID)
             articleCat.push({Category: category, Article: articlesTk[i]}) 
        }
       
        res.status(200).json({"Token cautat": res.token, "Rezultate": articleCat});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
    
})

module.exports = router;