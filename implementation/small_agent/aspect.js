var jsAspect = require("./dist/aspect.min");

const call_cleverbot = require("./utils/call_cleverbot").call_cleverbot();
const extract_categories = require("./utils/extract_categories").extract_categories();
const update_profile = require("./utils/update_profile").update_profile();
//const process_user_commands = require("./process_user_commands").process_user_commands();

/*function logBefore(fn, logMsg){
    return function() {
        console.log(logMsg);
        return fn();
    }
}

var process_user_commands_log = logBefore(process_user_commands, "Invocation of process_user_commands");
console.log(process_user_commands_log);*/


var beforeAdvice = new jsAspect.Advice.Before(function() {
    console.log("joinPoint", "before");
});

var afterAdvice =  new jsAspect.Advice.After(function() {
    console.log("joinPoint", "after");
});

var aspect = new jsAspect.Aspect(beforeAdvice,  afterAdvice);

aspect.applyTo(call_cleverbot);
aspect.applyTo(extract_categories);
aspect.applyTo(update_profile);