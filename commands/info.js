exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: "RANDOM",
            title: "É informação que você quer? Então você vai ter informação!",
            fields: [
                {
                    name: "`$nickname <nickname>`",
                    value: "altera o nickname do autor da mensagem para algo passado como parâmetro"
                },

                {
                    name: "`$ping`",
                    value: "Pong!"
                },

                {
                    name: "`$info`",
                    value: "algumas informações sobre mim mesmo!"
                }
            ]
        }
    });
}
