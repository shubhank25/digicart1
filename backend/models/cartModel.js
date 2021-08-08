const mongoose = require('../connection');

const schema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, ref: 'Users'},
    cart: Object
})


const model = mongoose.model('Cart', schema);

module.exports = model;
