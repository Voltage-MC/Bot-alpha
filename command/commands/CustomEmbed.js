const TE = require("../../utils/TE");
const Discord = require("discord.js");

class CustomEmbed
{
    static get Command()
    {
        return "customembed";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let ArgResult = message.content.split(" ").slice(1).slice(0).join(" ");

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {

            return message.channel.send("➤ " + "You do not have permission to use this command.")

        }

        let date = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();

        let embed = new Discord.RichEmbed();
        embed.setColor(TE.PURPLE);
        embed.setDescription(ArgResult);
        embed.setFooter("Today the " + date, "http://play.voltage-mc.net/images/logo.png");

        message.channel.send(embed).then(async embedMessage => {
            await embedMessage.react("✅");
            await embedMessage.react("❎");
        });

   } 

}

module.exports = CustomEmbed;