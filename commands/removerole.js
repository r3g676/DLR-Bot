const Discord = require("discord.js");

module.exports.run = async (btoa, message, args) => {
    //lil.addrole @user (role here)

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("sorry, not high enough permission level.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find user.");
    let role = args.join("").slice(22);
    if(!role) return message.reply("specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("couldn't find that role. Make the role is using - and not spaces!");

    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await(rMember.removeRole(gRole.id));

    message.channel.send(`<@${rMember.id}> has been removed from the ${gRole} role!`)
}

module.exports.help = {
    name: "removerole"
}