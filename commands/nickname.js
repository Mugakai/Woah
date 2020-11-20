exports.run = (client, message, args) => {
    let nickname = message.content.slice(10);
    let __user = message.author;

    if (!nickname) return message.reply("nickname não citado | :x:");
    message.member.setNickname(nickname);
    message.channel.send(`O nome de `+"`"+`${__user.username}`+"` para `"+`${nickname}`+'`.');
}
