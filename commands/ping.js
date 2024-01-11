const Discord = require("discord.js");

module.exports.run = async (btoa, message, args) => {
    return message.channel.send("Pong!");
}

module.exports.help = {
    name: "ping"
}