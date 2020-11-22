module.exports = (client, member) => {
    client.channels.cache.get("774274642520965182").send(`**:partying_face: | Seja bem vindo, `+"`"+member.user.username+"`"+`! Nós do ` + "`Rubiky`" + ` esperamos que se divirta durante sua estadia em nosso servidor!**`);
    member.send({embed:{
        color: "RANDOM",
        title: "🏓 | bem-vindo ao `Rubiky`! Espero que se divirta no servidor!",
        fields: [
            {
                name: "😇 | quer ajudar nosso servidor?",
                value: "para isso, que tal dar bump? É bem simples, apenas vá em um dos nossos chats de comandos e escreva: `!d bump`!",
                inline: true
            },

            {
                name: "🤖 | para saber meus comandos:",
                value: "me chame! Como fazer isso? Bem simples, apenas diga: `Woah!`.",
                inline: true
            }
        ]
    }});
}