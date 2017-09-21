import express from 'express';
import validateInput from '../shared/validations/signup.js';

import User from '../models/user.js'

let router = express.Router();

router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const { errors, isValid } = validateInput(req.body);

    if (isValid) {
        const newUser = new User ({
            email: email,
            password: password
        });

        User.createUser(newUser, (err, user) => {
            if (err) {
                if(err.name === 'MongoError' && err.code === 11000) {
                    return res.status(500).send('User already exists!')
                }
            }
            console.log(user)
            res.status(200).send('it worked')
        });
    } else {
        res.status(500).json(errors);
    }
});

export default router;