import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import shortid from 'shortid';

let UserSchema = mongoose.Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    bio: {
        type: String
    },
    avatar: { 
        type: String
    },
    following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}
