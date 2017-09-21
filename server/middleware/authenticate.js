import jwt from 'jsonwebtoken';
import config from '../config.js';

export default (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
        console.log(token);
    }
    console.log(authorizationHeader);
    next();
}