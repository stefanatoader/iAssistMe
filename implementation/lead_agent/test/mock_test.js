const assert = require('assert');
const mockery = require('mockery');
const agent = require("../components/communicator/small_agent");
const amqp = require('amqplib/callback_api');

const rabbitMock ={
    processIncoming: function(){
      return new Promise (function(reject,resolve){
          amqp.connect('amqp://localhost', function (err, conn) {
              if(err)
                  reject(err);
              else
                  resolve(conn);
          });
          setTimeout(()=>{process.exit(0);},1000);
      });
  }
};

mockery.registerMock('../components/rabbit/rabbit_handler',rabbitMock);

describe('RabbitMQ', function() {
    describe('#amqp connection',function(){
        it('should connect to local RabbitMQ',function(){
            mockery.enable();
            const rabbit = require('../components/rabbit/rabbit_handler');

            assert.doesNotReject(rabbit.processIncoming())
                .catch((err)=>{
                    process.exit(err);
                });
            mockery.disable();
        });
    });
});

