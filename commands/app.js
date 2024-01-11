const Discord = require("discord.js");

module.exports.run = async (btoa, message, args) => {
       
        //lil.app @Lil Green Bot (App here.)

        let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let app = args.join(" ").slice(22);

        let appEmbed = new Discord.RichEmbed()
        .setDescription("App")
        .setColor("#800000")
        .addField("App By", `${message.author} with ID: ${message.author.id}`)
        .addField("App", app);

        let appschannel = message.guild.channels.find(`name`, "pending-apps");
        if(!appschannel) return message.channel.send("Couldn't find apps channel.");


            message.delete().catch(O_o=>{});
            appschannel.send(appEmbed);

}

module.exports.help = {
    name: "app"
}