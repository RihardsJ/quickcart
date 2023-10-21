import request from 'supertest';
import app from '../../app';

describe('root e2e tests', () => {
  test('should response GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
  });
});
