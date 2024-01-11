const Discord = require("discord.js");

module.exports.run = async (btoa, message, args) => {
       
        //lil.report @user (reason here.)

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Can't find user.");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report")
        .setColor("#800000")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Spacer, don't mind this.")
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", reason);

        let reportschannel = message.guild.channels.find(`name`, "player-reports");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel");


            message.delete().catch(O_o=>{});
            reportschannel.send(reportEmbed);

}

module.exports.help = {
    name: "report"
}