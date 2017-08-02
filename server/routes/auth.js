import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import config from '../config.js';

let router = express.Router();

router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, (err, user) => {
        if (user) {
            console.log(user.password)
            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({
                    id: user._id,
                    email: user.email
                }, config.jwtSecret);
                res.json({ token });
            } else {
                res.status(500).send("Passwords do not match")
            }
        } else {
            console.log("NOPE")
            res.status(500).send("User not found")
        }
    })
})

export default router;