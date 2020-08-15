const TE = require("./utils/TE");
const Info = require("./utils/Info");

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(Info.TOKEN);

const commands_loader = require("./command/Loader.js");
const listener_loader = require("./listener/Loader.js");

client.on('ready', (message) => {

    //client.user.setAvatar("images/logo.png").catch(console.error);
    client.user.setActivity(".help | VoltageBot", {type: "Streaming", url: "https://www.twitch.tv/voltage-mc"}).then();

    let bot =
        "\n" + "  ____   ____ _______    " + "    __      ______  _   _______       _____ ______ " +
        "\n" + " |  _ \ / __ \__   __|   " + "    \ \    / / __ \| | |__   __|/\   / ____|  ____|" +
        "\n" + " | |_) | |  | | | |      " + "     \ \  / / |  | | |    | |  /  \ | |  __| |__   " +
        "\n" + " |  _ <| |  | | | |      " + "      \ \/ /| |  | | |    | | / /\ \| | |_ |  __|  " +
        "\n" + " | |_) | |__| | | |      " + "       \  / | |__| | |____| |/ ____ \ |__| | |____ " +
        "\n" + " |____/ \____/  |_|      " + "        \/   \____/|______|_/_/    \_\_____|______|" +
        "\n";

    console.log(bot);

    if (commands_loader) {

        console.log("Commands_loader a été chargé");

    } else {

        console.log("Commands_loader n'est pas chargé");

    }

    if (listener_loader) {

        console.log("Listener_loader a été chargé");

    } else {

        console.log("Listener_loader n'est pas chargé");

    }

});