const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
// If there isn't a filepath on the require then it is a node module
const { connectToDb, disconnect } = require("../db");

const server = require("../server");
describe("API tests", function () {
  //   let server;
  this.timeout(3_000);

  before(async () => {
    try {
      await connectToDb();
      //   server = require("../server");
    } catch (err) {
      console.error(err);
    }
  });
  it("should create a cat", (done) => {
    chai
      .request(server)
      .post("/cats/create")
      .send({
        name: "Manny",
        hasWhiskers: true,
        evil: true,
        length: 25,
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
          name: "Manny",
          hasWhiskers: true,
          evil: true,
          length: 25,
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  after(async () => {
    await disconnect();
  });
});
