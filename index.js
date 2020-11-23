const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const guildMemberAdd = require("./events/guildMemberAdd");
const message = require("./events/message");
const client = new Discord.Client();
const config = require("./settings/settings.json");
const Canvas = require('canvas');

client.config = config;

client.on('raw', async dados => {
    //#region Reaction Role
    if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if (dados.d.message_id != "780169693406429235") return

    let servidor = await client.guilds.cache.get("774274642520965180")
    let membro = await servidor.members.cache.get(dados.d.user_id);

    let cafet = servidor.roles.cache.get("774663123775914015"),
        inkei = servidor.roles.cache.get("780175676380414002"),
        mokuzai = servidor.roles.cache.get("780176147681378335");
        
    if (dados.t === "MESSAGE_REACTION_ADD") {
        if (dados.d.emoji.id === "774669881996083220") {
            if (membro.roles.cache.has(cafet)) return
            membro.roles.add(cafet);
        } else if (dados.d.emoji.id === "774665913559023738") {
            if (membro.roles.cache.has(inkei)) return
            membro.roles.add(inkei);
        } else if (dados.d.emoji.id === "775031385542885406") {
            if (membro.roles.cache.has(inkei)) return
            membro.roles.add(mokuzai);
        }
    }

    if (dados.t === "MESSAGE_REACTION_REMOVE") {
        if (dados.d.emoji.id === "774669881996083220") {
            membro.roles.remove(cafet);
        } else if (dados.d.emoji.id === "774665913559023738") {
            membro.roles.remove(inkei);
        } else if (dados.d.emoji.id === "775031385542885406") {
            membro.roles.remove(mokuzai);
        }
    }
    //#endregion
});


client.on('message', message => {
    if (message.content.toLowerCase() === "woah!") {
        return message.reply("yo! Para saber meus comandos, utilize: `$info`.");
    }

    if (message.content.includes("discord.gifts") || message.content.includes("discord.gift") || message.content.includes("discord.gg")) {
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

client.login('Nzc4MzYyODY3MzA4MTY3MTkw.X7Q46A.abHT3ZH3T2mREH_h5QovQmV7NAA');
