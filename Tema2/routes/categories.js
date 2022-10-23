require('dotenv').config()
const express = require('express');
const router = express.Router();
const categorySchema = require('../models/categories');
const articlesSchema = require('../models/articles');

const idFunctions = require('../middlewares/routesFunc');

router.get('/', async (req, res) => {
    try{
        const categories = await categorySchema.find();
        res.status(200).json(categories);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
   
})

router.get('/:id', idFunctions.getCategoriesID, (req, res) => {
    try{
        res.status(200).json(res.category);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
    
})

router.post('/', async (req, res) => {
    const category = new categorySchema({ 
        Category_name: req.body.Category_name
    });
    try{
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})


router.put('/:id', idFunctions.getCategoriesID, async (req, res) => {
    try{ 
     
     const updatedCategory = await categorySchema.updateOne({_id : res.category._id}, req.body);
     res.status(201).json({message: "Updated Category"});
 }
    catch(err){
      res.status(500).json({message: err.message});
     }
 })
 
 
 router.delete('/:id', idFunctions.getCategoriesID, async (req, res) => {
     try{
         await res.category.remove();
         const articlesTk = await articlesSchema.find({Article_categoryID: req.params.id})
         for(i = 0; i < articlesTk.length; i++) {
            
            articlesTk[i].Article_categoryID = null;
            await articlesTk[i].save();
                       
        }   
         res.status(201).json({message: 'Deleted succesfully!'});
     }
     catch(err){
         res.status(500).json({message: err.message});
     }
 })


module.exports = router;