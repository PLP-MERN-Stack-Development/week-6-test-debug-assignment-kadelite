const request = require('supertest');
const app = require('../../src/app');

describe('POST /api/auth/login', () => {
  it('should return a token for valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should return 401 for invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@example.com', password: 'wrongpass' });
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error');
  });
}); 