require('dotenv').config()
const express = require('express');
const router = express.Router();
const tokensSchema = require('../models/tokens');
const articlesSchema = require('../models/articles');
const categoriesSchema = require('../models/categories');

const idFunctions = require('../middlewares/routesFunc');


// get dupa un tokenID

router.get('/:id', idFunctions.getTokensID, async (req, res) => {
    try{
        //const ceva = {token1: res.token, token2: res.token }
        const final = {"token-res": res.token};
        const articlesTk = await articlesSchema.find({Article_tokensIDs: { $all: [req.params.id]}})
        
        for(i = 0; i<articlesTk.length; i++) {
            // inlocuiesc si id-ul de categorie cu numele 
            
        }
        articlesTk[0].Article_name = "teodor"

        res.status(200).json(articlesTk[0]);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
    
})





module.exports = router;