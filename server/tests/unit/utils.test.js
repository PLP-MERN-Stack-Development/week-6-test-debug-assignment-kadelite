const { toTitleCase, average, isValidObjectId } = require('../../utils');

describe('toTitleCase', () => {
  it('converts a string to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
  });
  it('returns empty string for non-string input', () => {
    expect(toTitleCase(123)).toBe('');
    expect(toTitleCase(null)).toBe('');
  });
});

describe('average', () => {
  it('returns the average of an array of numbers', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  it('returns 0 for non-array or empty array', () => {
    expect(average('not an array')).toBe(0);
    expect(average([])).toBe(0);
  });
});

describe('isValidObjectId', () => {
  it('returns true for valid ObjectId string', () => {
    expect(isValidObjectId('507f1f77bcf86cd799439011')).toBe(true);
  });
  it('returns false for invalid ObjectId', () => {
    expect(isValidObjectId('not-an-id')).toBe(false);
    expect(isValidObjectId(123)).toBe(false);
    expect(isValidObjectId('507f1f77bcf86cd79943901')).toBe(false); // 23 chars
  });
}); 