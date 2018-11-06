//Handler for RabbitMQ
const amqp = require('amqplib/callback_api');
const config = require('../../configs/configs');
const errors = require('../error/errors');

function processIncoming(agentFunction,callback){
    if(!agentFunction) {
        return callback(Error(errors.nullAgent),null);
    }else {
        amqp.connect(config.rabbit, function (err, conn) {
            actionOnSubscribe(err, conn, agentFunction);
        });
        return callback(null);
    }
}

function actionOnSubscribe(err,conn,callback){
    conn.createChannel(function(err, ch) {
        const inbound = 'inbound';

        ch.assertQueue(inbound, {durable: false});
        ch.consume(inbound, function(request) {
            callback(request,(err,response)=>{
               if(!err)
                   actionOnPublish(conn,response);
            });
        }, {noAck: true});
    });
}

function actionOnPublish(conn,body) {
    conn.createChannel(function (err, ch) {
        const outbound = 'outbound';
        ch.assertQueue(outbound, {durable: false});
        ch.sendToQueue(outbound, Buffer.from(body));
    });

}

module.exports.processIncoming = processIncoming;
module.exports.actionOnSubscribe = actionOnSubscribe;
module.exports.actionOnPublish = actionOnPublish;