// Example utility functions for client

export function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function sum(arr) {
  return Array.isArray(arr) ? arr.reduce((a, b) => a + b, 0) : 0;
}

export function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
} 