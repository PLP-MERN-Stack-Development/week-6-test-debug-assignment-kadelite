// Example Express authentication middleware

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    req.user = { id: 'mockUserId' }; // Simulate user extraction
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}

module.exports = authMiddleware; 