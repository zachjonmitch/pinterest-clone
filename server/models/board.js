import mongoose from 'mongoose';
import shortid from 'shortid';

let BoardSchema = mongoose.Schema({
    _id: {
        type: String,
        'default': shortid.generate
    }, 
});

const Board = module.exports = mongoose.model('Board', BoardSchema);