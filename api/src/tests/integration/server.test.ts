import request from 'supertest';
import { container } from '../../configs';

const server = container.resolve('server');

describe('root e2e tests', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should response GET method', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toEqual(200);
  });
});
