const express = require('express');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');

const app = express();
app.use(express.json());

// Mount posts API
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

module.exports = app; 