/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  it, describe, before, after,
} = require('mocha');

chai.use(chaiHttp);
// If there isn't a filepath on the require then it is a node module
const { connectToDb, disconnect } = require('../db');

const server = require('../server');
const { catModel } = require('../models');

describe('API tests', function () {
  //   let server;
  this.timeout(30_000);

  let testCat;

  this.beforeEach(async () => {
    await catModel.deleteMany({});
    testCat = await catModel.create({
      name: 'Manny',
      hasWhiskers: true,
      evil: true,
      length: 25,
    });
    testCat = JSON.parse(JSON.stringify(testCat));
  });

  before(async () => {
    try {
      await connectToDb();
      //   server = require("../server");
    } catch (err) {
      console.error(err);
    }
  });

  it('should create a cat', (done) => {
    chai
      .request(server)
      .post('/cats/create')
      .send({
        name: 'Manny',
        hasWhiskers: true,
        evil: true,
        length: 25,
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
          name: 'Manny',
          hasWhiskers: true,
          evil: true,
          length: 25,
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it('should get all cats', (done) => {
    chai
      .request(server)
      .get('/cats/getAll')
      .send()
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(testCat);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it('should remove a cat', (done) => {
    const { _id } = testCat;
    chai
      .request(server)
      .delete(`/cats/remove/${_id}`)
      .send()
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(testCat);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it('should update a cat', (done) => {
    const { _id } = testCat;
    chai
      .request(server)
      .patch(`/cats/update/${_id}?name=barry`)
      .send()
      .end((err, res) => {
        // chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include({
          name: 'barry',
          hasWhiskers: true,
          evil: true,
          length: 25,
        });
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  after(async () => {
    await disconnect();
  });
});
