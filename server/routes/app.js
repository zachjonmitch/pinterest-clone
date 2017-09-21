import express from 'express';
import path from 'path';
const router = express.Router();

router.get('/users/:username', (req, res) => {
    console.log("testing");
});

export default router;