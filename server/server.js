import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mongodb from 'mongodb';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird;

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import baseRoutes from './routes/app.js';
import users from './routes/users.js';
import auth from './routes/auth.js';
import posts from './routes/posts.js';

const app = express();
const PORT = process.env.PORT || 8080;

const db = 'mongodb://localhost/pinterest-clone';
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.use('/', baseRoutes);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/posts', posts);

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});

