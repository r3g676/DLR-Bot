const Discord = require("discord.js");

module.exports.run = async (btoa, message, args) =>{
    
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Info")
    .setColor("#800000")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);


    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo"
}