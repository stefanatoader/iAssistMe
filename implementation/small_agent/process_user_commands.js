const async = require("async");
const schema = require("./process_commands_schema");
const tv4 = require("tv4");

const call_cleverbot = require("./utils/call_cleverbot").call_cleverbot;
const extract_categories = require("./utils/extract_categories").extract_categories;
const update_profile = require("./utils/update_profile").update_profile;


exports.process_user_commands = (req, res) => {
    let body = req.body;
    if (!tv4.validate(body, schema)) {
        let resp = {
            "data": "Invalid parameters",
            "status": 1
        };
        if(process.env.test){
            console.error(JSON.stringify(resp));
        } else {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(resp));
            res.end();
        }
    } else {
        async.waterfall([
                (cb) => {
                    call_cleverbot(body.command, cb);
                },
                (cleverbot_response, cb) => {
                    extract_categories(body.command, cleverbot_response, cb);
                },
                (cleverbot_response, categories, cb) => {
                    update_profile(body.user_id, cleverbot_response, categories, cb);
                }],
            (err, res) => {
                let resp_code = 200;
                let resp = {};
                if (err) {
                    resp = err;
                    resp_code = 500;
                } else {
                    resp = {"status": 0, "data": res};
                    resp_code = 200;
                }
                if(process.env.test){
                    console.log(resp);
                } else {
                    res.writeHead(resp_code, {'Content-Type': 'application/json'});
                    res.write(JSON.stringify(resp));
                    res.end();
                }

            });
    }
};