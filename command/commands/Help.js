const Info = require("../../utils/Info");
const TE = require("../../utils/TE");
const Discord = require("discord.js");

class Help
{
    static get Command()
    {
        return "help";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let icon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed();
        embed.setDescription("Report for HELP :white_check_mark:");
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.addField("➤ " + Info.PREFIX + "ip", "get ip of server");
        embed.addField("➤ " + Info.PREFIX + "vote", "get server vote");
        embed.addField("➤ " + Info.PREFIX + "website", "get server website");
        embed.addField("➤ " + Info.PREFIX + "shop", "get shop website");

        message.channel.send(embed)
   } 

}

module.exports = Help;