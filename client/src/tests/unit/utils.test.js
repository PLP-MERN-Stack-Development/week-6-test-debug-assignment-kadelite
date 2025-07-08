import { capitalize, sum, isEmail } from '../../utils';

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('returns empty string for non-string input', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(null)).toBe('');
  });
});

describe('sum', () => {
  it('returns the sum of an array of numbers', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  it('returns 0 for non-array input', () => {
    expect(sum('not an array')).toBe(0);
  });
});

describe('isEmail', () => {
  it('returns true for valid email', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });
  it('returns false for invalid email', () => {
    expect(isEmail('not-an-email')).toBe(false);
    expect(isEmail('test@.com')).toBe(false);
  });
}); 