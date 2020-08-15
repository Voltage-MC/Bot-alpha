const Info = require("../../utils/Info");
const TE = require("../../utils/TE");
const Channels = require("../../utils/Channels");
const Discord = require("discord.js");

class ClearMessage
{
    static get Command()
    {
        return "clearmessage";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        const text = args.slice(0).join(" ");

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {

            return message.channel.send("➤ " + "You do not have permission to use this command.")

        }

        if (!text) {

            return message.channel.send("➤ " + Info.PREFIX + "clear <number>")

        }

        message.channel.bulkDelete(parseInt(text));

        message.channel.send("➤ " + "You have clear " + text + " message");

        let icon = client.user.displayAvatarURL;
        let date = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();

        let embed = new Discord.RichEmbed();
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.setDescription("Report for CLEAR :white_check_mark:");
        embed.addField("➤ Number delete :", text);
        embed.addField("➤ Clear by :", message.author.username);
        embed.setFooter("Today the " + date, "http://play.voltage-mc.net/images/logo.png");

        let logschannel = message.guild.channels.find(`id`, Channels.LOGS);
        if (!logschannel) return message.channel.send("➤ " + "This channel is invalid.");
        logschannel.send(embed);


   } 

}

module.exports = ClearMessage;