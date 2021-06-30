'use strict';
 
const express = require('express');
const clothesModel = require('../models/clothes.js');
const dataCollection = require('../models/data-collection-class');
//const validator = require('../middleware/validator')
const router = express.Router();

const clothes = new dataCollection(clothesModel);


//create requests
router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', createClothes);
router.put('/:id', updatClothes);
router.delete('/:id', deleteClothes);


async function getClothes(req, res, next) {
    try {

        const resObj = await clothes.read(req.params.id);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }

}

async function createClothes(req, res, next) {
    try {
        const resObj =  await clothes.create(req.body);
        res.status(201).json(resObj)
    }
    catch (e) {
        next(e);
    }
}


async function updatClothes(req, res,next) {

    try {

        const resObj = await clothes.update(req.params.id, req.body);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }
}


async function deleteClothes(req, res,next) {
    
    try {

        const resObj = await clothes.delete(req.params.id);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }

}

module.exports = router;