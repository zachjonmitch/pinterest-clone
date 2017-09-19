import mongoose from 'mongoose';
import shortid from 'shortid';

let PostSchema = mongoose.Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    image: {
        type: String
    },
    url: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    author: {
        type: String
    },
    avatar: {
        type: String
    },
    board: {
        type: String
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.createPost = (newPost, callback) => {
    newPost.save(callback);
}
