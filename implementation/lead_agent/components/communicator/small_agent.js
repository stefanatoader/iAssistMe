//Request to small agent farm
const request = require('request');
const url = require('../../configs/configs').agent_farm;

function agentRequest(payload,callback){
    request.post(url,payload,(err,resp,body)=>{
        if(err)
            return callback(err,null);
        else
            return callback(null,body);
    });
}

module.exports.agentRequest = agentRequest;