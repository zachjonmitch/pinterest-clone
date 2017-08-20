import express from 'express';
import multer from 'multer';

let upload = multer({ dest: './uploads/' });
let router = express.Router();

router.post('/new-post', upload.single('file'), (req, res) => {
    console.log("testing post backend")
    return res.json(req.file);
});


export default router;