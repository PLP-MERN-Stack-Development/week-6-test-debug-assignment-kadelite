const express = require('express');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const morgan = require('morgan');
const logger = require('./logger');
const statusMonitor = require('express-status-monitor');

const app = express();
app.use(express.json());
app.use(morgan('combined', { stream: { write: msg => logger.info(msg.trim()) } }));
app.use(statusMonitor());

// Mount posts API
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

// Global error handler
app.use((err, req, res, next) => {
  logger.error(err.stack || err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Example application log
logger.info('Express app initialized');

module.exports = app; 