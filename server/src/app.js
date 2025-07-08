const express = require('express');
const postsRouter = require('./routes/posts');

const app = express();
app.use(express.json());

// Mount posts API
app.use('/api/posts', postsRouter);

module.exports = app; 