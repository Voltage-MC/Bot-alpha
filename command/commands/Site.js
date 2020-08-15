const TE = require("../../utils/TE");
const Discord = require("discord.js");

class Site
{
    static get Command()
    {
        return "site";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let icon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed();
        embed.setDescription("Report for SITE :white_check_mark:");
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.addField("➤ Website:", "http://voltage-mc.net/");

        message.channel.send(embed)
   } 

}

module.exports = Site;