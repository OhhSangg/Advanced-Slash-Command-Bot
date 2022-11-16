const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `Now Using Slash Commands`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
                name: "📢┆Alert!",
                value: 'New version, new era? More info join  [this server](https://discord.gg/xAWGYeh2TU)',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 