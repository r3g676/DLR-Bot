const Discord = require("discord.js");

module.exports.run = async (btoa, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("Commands")
    .setColor("#800000")
    .addField("Report", "Usage: lil.report @user (reason)")
    .addField("Serverinfo", "Usage: lil.serverinfo")
    .addField("App", "Usage: lil.app @Lil Green Bot (App link + Whatever else you want to put.)")
    .addField("Add Role and Remove Role", "Usage: (lil.removerole or lil.addrole) @user (role)")
    .addField("Ping", "Usage: lil.ping");

    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "help"
}