const Info = require("../utils/Info");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(Info.TOKEN);

/**
 * Events Lists
 */
const guildadd = require('./GuildMemberAdd');

client.on('guildMemberAdd', member =>
{
    guildadd.onRun(member);
});