module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - VC me nhi hai re tu!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - SANE VC JOIN KRO PLS!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Ayy gane ka naam toh bol!`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};