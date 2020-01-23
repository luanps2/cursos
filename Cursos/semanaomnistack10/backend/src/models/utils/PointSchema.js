const mongoose = require('mongoose');
// const PointSchema = require('./utils/PointSchema');

const PointSchema = new mongoose.Schema({
type: {
    type: String,
    enum: ['Point'],
    required: true,
},
coordinates: {
    type: [Number],
    required: true,
},

});

module.exports = PointSchema;