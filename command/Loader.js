const Info = require("../utils/Info");
const Fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(Info.TOKEN);
client.commands = new Discord.Collection();

Fs.readdir(__dirname + "/commands/", (e, files) => {

    if(e) return console.error(e);

    let jsfile = files.filter(f => f.split(".").pop() === "js");

    if(jsfile.length <= 0)
    {
        return;

    }

    jsfile.forEach((f)  => {

        let commandsloads = require(__dirname + `/commands/${f}`);

        client.commands.set(commandsloads.Command, commandsloads)

    })

});

client.on('message', function(message)
{
    let args = message.content.split(" ");
    let cmds = client.commands.get(message.content.split(" ")[0].slice(Info.PREFIX.length));

    if(cmds) {

        if (cmds.acceptChannel(message) || message.channel.id === cmds.acceptChannel()) {

            cmds.onRun(client, message, args);

        }

    }

});