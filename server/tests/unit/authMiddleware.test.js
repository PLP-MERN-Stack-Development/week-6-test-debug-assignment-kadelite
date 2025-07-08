const authMiddleware = require('../../authMiddleware');

describe('authMiddleware', () => {
  it('calls next if Authorization header is valid', () => {
    const req = { headers: { authorization: 'Bearer token' } };
    const res = {};
    const next = jest.fn();
    authMiddleware(req, res, next);
    expect(req.user).toEqual({ id: 'mockUserId' });
    expect(next).toHaveBeenCalled();
  });

  it('returns 401 if Authorization header is missing', () => {
    const req = { headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();
    authMiddleware(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
    expect(next).not.toHaveBeenCalled();
  });

  it('returns 401 if Authorization header is invalid', () => {
    const req = { headers: { authorization: 'Invalid token' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();
    authMiddleware(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
    expect(next).not.toHaveBeenCalled();
  });
}); 