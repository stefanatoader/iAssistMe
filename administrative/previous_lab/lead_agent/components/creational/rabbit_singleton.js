//Subscribe and Publish endpoints for RabbitMQ

const configs = require('../../configs/configs');

/**
 * @return {string}
 */
function RabbitSubscribe(){
    return 'amqp://' + configs.sub_rabbit;
}

/**
 * @return {string}
 */
function RabbitPublish(){
    return 'amqp://' + configs.pub_rabbit;
}

module.exports.SubscribeEndpoint = RabbitSubscribe;
module.exports.PublishEndpoint = RabbitPublish;
