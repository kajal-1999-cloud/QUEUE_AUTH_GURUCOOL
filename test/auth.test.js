// test/auth.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const { expect } = chai;

describe('Auth', () => {
  it('should register a user', (done) => {
    chai.request(app)
      .post('/register')
      .send({ 
        username: 'testuser', 
        email: 'testuser@example.com',  
        password: 'testpass' 
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });

  it('should login a user', (done) => {
    chai.request(app)
      .post('/login')
      .send({ 
        email: 'testuser@example.com', 
        password: 'testpass' 
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
});
