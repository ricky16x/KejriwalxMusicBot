module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - VC toh join kr lmao!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Same VC me hona hota chote!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Gaana nhi bj rha bruh!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Dhang ka filter bta na!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Aisa koi filter nahi hai! Try (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Filter daal rha ruk`);
        else message.channel.send(`${client.emotes.music} - Hata rha filter sabr rakh vaii`);
    },
};