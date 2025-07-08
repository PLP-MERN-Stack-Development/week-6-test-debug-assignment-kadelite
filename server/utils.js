// Example utility functions for server

function toTitleCase(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function average(arr) {
  return Array.isArray(arr) && arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
}

function isValidObjectId(id) {
  // Simple check for 24 hex chars (Mongoose ObjectId)
  return typeof id === 'string' && /^[a-fA-F0-9]{24}$/.test(id);
}

module.exports = { toTitleCase, average, isValidObjectId }; 