const TE = require("../../utils/TE");
const Discord = require("discord.js");

class Ip
{
    static get Command()
    {
        return "ip";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let icon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed();
        embed.setDescription("Report for IP :white_check_mark:");
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.addField("➤ Ip:", "play.voltage-mc.net");
        embed.addField("➤ Port:", "19132");

        message.channel.send(embed)
   } 

}

module.exports = Ip;