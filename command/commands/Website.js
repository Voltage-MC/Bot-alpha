const TE = require("../../utils/TE");
const Discord = require("discord.js");

class Website
{
    static get Command()
    {
        return "website";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let icon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed();
        embed.setDescription("Report for WEBSITE :white_check_mark:");
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.addField("➤ Website:", "http://voltage-mc.net/");

        message.channel.send(embed)
   } 

}

module.exports = Website;