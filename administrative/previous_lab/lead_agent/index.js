const rabbitHandler = require('./components/rabbit/rabbit_handler');
const rabbitSingleton = require('./components/creational/rabbit_singleton');
const requestFactory = require('./components/creational/request_factory');
const AgentObservable = require('./components/observable/AgentObservable');
const observable = new AgentObservable();
const async = require('async');

const subConnector = rabbitHandler.connect(rabbitSingleton.SubscribeEndpoint(), function (){});
const pubConnector = rabbitHandler.connect(rabbitSingleton.PublishEndpoint(),function () {});


observable.on('req',function(request){
   let trainReq = requestFactory.create(request);
   let adjustedReq = requestFactory.create(request,function adjust(){});

   async.parallel([
       // request to train function,
       // request to Load Balancer
   ],(err,req)=>{

   })
});

/*
-> Create channels for RabbitMQ using rabbit_singleton

    -> infinite loop

    listen on RabbitMQ subscribe channel and  take action:
           -> fork request using request_factory
           -> parallel request using async.parallel
                1. one of the request will be send for training the agent
                2. the other one (with adjusted request) is send the farm Load Balancer
           -> publish response from Load Balancer

* */


