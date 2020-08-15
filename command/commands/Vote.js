const TE = require("../../utils/TE");
const Discord = require("discord.js");

class Vote
{
    static get Command()
    {
        return "vote";
    }

    static acceptChannel(message)
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let icon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed();
        embed.setDescription("Report for VOTE :white_check_mark:");
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.addField("➤ Website:", "http://vote.voltage-mc.net/");

        message.channel.send(embed)
   } 

}

module.exports = Vote;