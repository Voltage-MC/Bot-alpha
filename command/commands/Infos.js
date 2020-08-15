const TE = require("../../utils/TE");
const Discord = require("discord.js");

class Infos
{
    static get Command()
    {
        return "info";
    }

    static acceptChannel()
    {
        return true;
    }

    static onRun(client, message, args)
    {
        let icon = client.user.displayAvatarURL;
        let member_all = client.users.size;
        let date = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();

        let embed = new Discord.RichEmbed();
        embed.setDescription("Report for IP :white_check_mark:");
        embed.setColor(TE.PURPLE);
        embed.setThumbnail(icon);
        embed.addField('➤ Fondateur :', message.guild.owner.user.tag, true);
        embed.addField('➤ Membres :',  + member_all);
        embed.addField('➤ Latences :', + Math.round(client.ping) + 'ms');
        embed.addField("➤ Send le:", date);

        message.channel.send(embed)
   } 

}

module.exports = Infos;