const assert = require('assert');
const amqp = require('amqplib/callback_api');
const agent = require('../components/communicator/small_agent');
const rabbit = require('../components/rabbit/rabbit_handler');

function flow(agentFunction){
    return new Promise(function (resolve,reject) {
        //Substitute for RabbitMQ Subscribe Channel
        amqp.connect('amqp://localhost', function (err, conn) {
            conn.createChannel(function (errSub, ch) {
                if(errSub)
                    reject(errSub);
                else{
                    let q = 'outbound';

                    ch.assertQueue(q, {durable: false});

                    //Main function
                    rabbit.processIncoming(agentFunction,(err)=>{
                        if(err)
                            reject(err);
                    });

                    //Substitute for RabbitMQ publish Channel
                    conn.createChannel(function (errPub, cht) {
                        if(errPub)
                            reject(errPub);
                        else{
                        let qt = 'inbound';
                        cht.assertQueue(qt, {durable: false});
                        cht.sendToQueue(qt, Buffer.from('Hello World!'));
                    }});

                    ch.consume(q, function (msg) {
                        resolve(msg.content.toString());
                    }, {noAck: true});
                }
            });
        });
    });
}

describe('flow', function() {
    describe('#happyFlow',function(){
        it('promise in flow should not reject"', async function(){
            assert.doesNotReject(flow(agent.agentRequest))
                .then(()=>{
                    process.exit(0);
                }).catch(()=>{
                    assert.fail();
                    process.exit(0);
            });
        });
    });

    describe('#errorHandlingFlow',function(){
        it('promise in flow should reject',function(){
            assert.rejects(flow(null))
                .then(()=>{
                    assert.fail();
                    process.exit(0);
                }).catch(()=>{
                    process.exit(0);
            });
        });
    });
});


