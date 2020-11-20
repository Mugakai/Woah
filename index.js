const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const guildMemberAdd = require("./events/guildMemberAdd");
const message = require("./events/message");
const client = new Discord.Client();
const config = require("./settings/settings.json");
const Canvas = require('canvas');

client.config = config;

client.on('message', message => {
    if (message.content.toLowerCase() === "woah!") {
        return message.reply("yo! Para saber meus comandos, utilize: `$info`.");
    }

    if (message.content.includes("http://") || message.content.includes(".com") || message.content.includes("discord.gifts") || message.content.includes("discord.gift") || message.content.includes("discord.gg")) {
        message.delete();
        message.reply("Sem divulgação.");
    }

    if (message.content.includes("◾") || message.content.includes("◾") || message.content.includes("⬛") || message.content.includes("⬜") || message.content.includes("◽") || message.content.includes("🤡") || message.content.includes("𒀱") || message.content.includes("🐒") || message.content.includes("🐵")) {
        message.delete({ timeout: 0 });        
        var role = message.guild.roles.cache.find(r => r.name === "Silenciado");

        message.member.roles.add(role);

        setTimeout(async () => {
            member.roles.remove(role);
        }, 60000);
    }
})

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});

client.login('Nzc4MzYyODY3MzA4MTY3MTkw.X7Q46A.DY3jeLHo9nEAy88W_F2pbRn8LPI');