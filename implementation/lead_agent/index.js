const rabbitHandler = require('./components/rabbit/rabbit_handler');
const agent = require('./components/communicator/small_agent');


rabbitHandler.processIncoming(agent.agentRequest);
