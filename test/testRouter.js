const request = require('supertest');
const {app} = require('../src/router');

describe('test router', () => {
  describe('test static file', () => {
    it('Should serve the index.html file', async () => {
      await request(app).get('/').expect(200);
    });
  });
});
