const Info = require("../../utils/Info");
const TE = require("../../utils/TE");
const Channels = require("../../utils/Channels");
const Discord = require("discord.js");

class Ban
{
    static get Command()
    {
        return  "ban";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        if (!message.guild) return;

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {

            return message.channel.send("➤ " + "You do not have permission to use this command.")

        }

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        const reason = args.slice(1);

        if (!rUser || !reason) {

            return message.channel.send("➤ " + Info.PREFIX + "ban <member> <reason>")

        }

        if (rUser.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) {

            return message.channel.send("➤ " + "You can't ban this user")

        }

        if (!rUser.bannable) {

            return message.channel.send("➤ " + "I can't ban this user")

        }

        let icon = client.user.displayAvatarURL;

        message.guild.ban(rUser, {days: 7}).then();

        message.channel.send("➤ " + rUser + " has been banned from the server");

        let date = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();

        let embed = new Discord.RichEmbed();
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.setDescription("Report for BAN :white_check_mark:");
        embed.addField("➤ Player ban :", rUser);
        embed.addField("➤ Ban by :", message.author.username);
        embed.setFooter("Today the " + date, "http://play.voltage-mc.net/images/logo.png");

        rUser.send(embed);

        let logschannel = message.guild.channels.find(`id`, Channels.LOGS);
        if (!logschannel) return message.channel.send("➤ " + "This channel is invalid.");
        logschannel.send(embed);

   } 

}

module.exports = Ban;