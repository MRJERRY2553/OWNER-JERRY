const fs = require("fs");
module.exports.config = {
        name: "chumi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "chaumin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("chumi")==0 || event.body.indexOf("Chummi")==0 || event.body.indexOf("CHUMMI")==0 || event.body.indexOf("chummi")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐌𝐫 𝐉𝐞𝐫𝐫𝐲 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐂𝐡𝐔𝐦𝐈 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/8a9f84ed741b6df2854fb136dd028e79.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍜", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
