module.exports = (client, member) => {
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