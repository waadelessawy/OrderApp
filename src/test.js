var assert = require('assert');
var order = require('./Models/Orders');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./app');
var should = chai.should();
var token="";
chai.use(chaiHttp);

  describe('/login ', () => {
      it('it should login', (done) => {
        chai.request(server)
            .post('/login')
            .send({ email: 'waad.elessawy@gmail.com', password: '123' })
            .end((err, res) => {
                  console.log("test:\n");
                  console.log(res);
                  console.log("test end\n");
                  res.should.have.status(200);
                  console.log(res.body.token)
                  token = res.body.token
           
              done();
            });
      });
  });

  describe('/createorder ', () => {
    it('it should create new order', (done) => {
      chai.request(server)
          .post('/Order')
          .send({_id:10,userId:1,totalPrice:100})
          .set('Authorization', 'JWT ' + token)
          .end((err, res) => {
             
                res.should.have.status(200);
                
         
            done();
          });
    });
});

describe('/GetUserOrders ', () => {
  it('it get user orders', (done) => {
    chai.request(server)
        .get('/Order/1')
        
        .set('Authorization', 'JWT ' + token)
        .end((err, res) => {
           
              res.should.have.status(200);
         
          
          done();
        });
  });
});
