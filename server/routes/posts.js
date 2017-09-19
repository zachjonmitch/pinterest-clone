import express from 'express';
import multer from 'multer';

import Post from '../models/post.js';

let upload = multer({ dest: './uploads/' });
let router = express.Router();

router.post('/new-post', upload.single('file'), (req, res) => {
    const url = req.body.url;
    const file = req.file.filename;
    const title = req.body.title;
    const description = req.body.description;

    const newPost = new Post ({
        image: file,
        url: url,
        title: title,
        description: description
    });

    Post.createPost(newPost, (err, post) => {
        console.log(post)
        res.status(200).send('it worked')
    });
});


export default router;