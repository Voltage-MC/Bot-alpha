const TE = require("../../utils/TE");
const Discord = require("discord.js");

class Shop
{
    static get Command()
    {
        return "shop";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let icon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed();
        embed.setDescription("Report for SHOP :white_check_mark:");
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.addField("➤ Website:", "http://shop.voltage-mc.net/");

        message.channel.send(embed)
   } 

}

module.exports = Shop;