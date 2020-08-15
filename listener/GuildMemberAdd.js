const TE = require("../utils/TE");
const Info = require("../utils/Info");
const Channels = require("../utils/Channels");
const Roles = require("../utils/Roles");
const Emote = require("../utils/Emote");

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(Info.TOKEN);

class GuildMemberAdd {

    static onRun(member)
    {
        let channel = member.guild.channels.find('id', Channels.WELCOME);
        let role = Roles.MEMBERS;

        member.addRole(role);

        let embed = new Discord.RichEmbed();
        embed.setColor(TE.PURPLE);
        embed.setDescription
        (
            Emote.INFO + "  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬" + "\n" +
            "Welcome " + member.user + " to Voltage  ! " + "\n" +
            "You need to read #deleted-channel" + "\n" +
            Emote.INFO + "  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬" + "\n"
        );

        channel.send(embed);
    }

}

module.exports = GuildMemberAdd;