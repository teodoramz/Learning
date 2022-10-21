require('dotenv').config()
const express = require('express');
const router = express.Router();
const categorySchema = require('../models/categories');


router.get('/', async (req, res) => {
    try{
        const categories = await categorySchema.find();
        res.status(200).json(categories);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
   
})

router.get('/:id', getCategoriesID, (req, res) => {
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


router.put('/:id', getCategoriesID, async (req, res) => {
    try{ 
     
     const updatedCategory = await categorySchema.updateOne({_id : res.category._id}, req.body);
     res.status(201).json({message: "Updated Category"});
 }
    catch(err){
      res.status(500).json({message: err.message});
     }
 })
 
 
 router.delete('/:id', getCategoriesID, async (req, res) => {
     try{
         await res.category.remove();
         res.status(201).json({message: 'Deleted succesfully!'});
     }
     catch(err){
         res.status(500).json({message: err.message});
     }
 })

async function getCategoriesID(req, res, next){
    let category;
    try{
        category = await categorySchema.findById(req.params.id);
        // findById -- find docs by id
        if(category == null){
            return res.status(404).json({message: 'Category not found'})
        }
    }
    catch(err){
    return res.status(500).json({message: err.message})
    }
    
        res.category = category;
        next();  //move on
    }

module.exports = router;