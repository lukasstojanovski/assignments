const mongoose = require("mongoose");

const jadenje = mongoose.model('jadenja', {
    name: String,
    cuisine: String,
});

module.exports = jadenje;
