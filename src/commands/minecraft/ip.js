const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `・Minecraft Server Information`,
        desc: `Beta Closed, Ready For Main Realease! Server Version : 1.19`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "<:uo_paper:1015550831199789146> ┆ IP 1",
            value: `<a:arrow_yellowright:983277414522171423> `,
            inline: false,
        },
        {
            name: "<:uo_paper:1015550831199789146> ┆ IP 2",
            value: `<a:arrow_yellowright:983277414522171423> `,
            inline: false,
        },
        {
            name: "<:uo_paper:1015550831199789146> ┆ IP 3",
            value: `<a:arrow_yellowright:983277414522171423> `,
            inline: false,
        }],
        type: 'editreply'
    }, interaction)
}