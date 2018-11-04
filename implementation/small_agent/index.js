
const process_user_commands = require("./process_user_commands").process_user_commands;
let req = {
    "body": {
        "user_id": "29eacf99-359c-4503-8b67-bc6a4e3e8d74",
        "command": "Who are you?"
    }
};

process_user_commands(req, {});