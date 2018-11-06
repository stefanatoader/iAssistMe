const assert = require('assert');

describe('RabbitMQ', function() {
    describe('#connection',function(){
       it('should be singleton',function(){
           const con1 = require('../components/rabbit/rabbit_handler');
           const con2 = require('../components/rabbit/rabbit_handler');
           assert.equal(con1,con2,'connections should be singletons')
       });
    });
});


describe('SmallAgent', function() {
    describe('#emptyRequest',function(){
        it('should return "Hello World!"',function(){
            const agent = require('../components/communicator/small_agent');
            agent.agentRequest('',(err,resp)=>{
               assert.equal(resp,"Hello World!");
            });
        });
    });
});


