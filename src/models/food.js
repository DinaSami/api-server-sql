'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String }
})

const foodsModel = mongoose.model('foods', foodSchema)

module.exports = foodsModel;