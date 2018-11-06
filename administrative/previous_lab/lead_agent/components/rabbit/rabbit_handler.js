//Handler for RabbitMQ

const amqp = require('amqplib/callback_api');

function rabbitConnection(rabbit_connection,cb_connection){
    return amqp.connect(rabbit_connection,cb_connection);
}

module.exports.connect = rabbitConnection;