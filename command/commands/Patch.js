const TE = require("../../utils/TE");
const Channels = require("../../utils/Channels");
const Discord = require("discord.js");

class Patch
{
    static get Command()
    {
        return "patch";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let ArgResult = args.slice(1).slice(0).join(" ");

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {

            return message.channel.send("➤ " + "You do not have permission to use this command.")

        }

        let date = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();

        let embed = new Discord.RichEmbed();
        embed.setColor(TE.PURPLE);
        embed.setDescription("Patch note :white_check_mark:\n\n" + ArgResult);
        embed.setFooter("Today the " + date, "http://play.voltage-mc.net/images/logo.png");

        let logschannel = message.guild.channels.find(`id`, Channels.PATCH);
        if (!logschannel) return message.channel.send("➤ " + "This channel is invalid.");
        logschannel.send(embed).then(async embedMessage => {
            await embedMessage.react("✅");
            await embedMessage.react("❎");
        });

   } 

}

module.exports = Patch;