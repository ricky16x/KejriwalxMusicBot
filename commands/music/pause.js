module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - VC me nhi ho aap ji!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Same VC me ho ya nhi?!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Kardiya!`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`);
    },
};