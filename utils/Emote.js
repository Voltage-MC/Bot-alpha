const Info = require("../utils/Info");

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(Info.TOKEN);

class Emote
{
    static get INFO()
    {
      return client.emojis.get("622832441001902121");
    }
}

module.exports = Emote;