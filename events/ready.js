module.exports = (client, message) => {
    console.log('Hello world!');
    const activities = [
        `estou em ${client.guilds.cache.size} servidores!`,
        `estou em ${client.channels.cache.size} canais!`,
        `meu prefixo é "${client.config.prefix}"!`
    ];
    
    let i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: "STREAMING" }), 5000);
}