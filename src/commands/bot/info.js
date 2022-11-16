const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
const { connection } = require("mongoose");
module.exports = async (client, interaction, args) => {    
  const status = [
    "Disconnected",
    "Connected",
    "Connecting",
    "Disconnecting"
  ];

  const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");

            client.embed({
                title: `<:uo_info:1015553303242883112>・Bot information`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                fields: [{
                    name: "<:uo_info:1015553303242883112> ┆ Information",
                    value: `Bot is a bot with which you can run your entire server! With no less than 400+ commands, we have a large bot with many options to improve your server!`,
                    inline: false,
                },
                {
                    name: "<:discord_bot:1012038552521031703> ┆ Bot name",
                    value: `${client.user.username}`,
                    inline: true,
                },
                {
                    name: "<:uo_add:1015553154533838879> ┆ Bot id",
                    value: `${client.user.id}`,
                    inline: true,
                },
                {
                    name: "<:uo_BotsManeger:1015564324422553670> ┆ Shards",
                    value: `\`${client.options.shardCount}\` shards`,
                    inline: true,
                },
                {
                    name: "<:blue_crown:1012017210992115812> ┆ Bot owner",
                    value: `<@!700410464919879782> `,
                    inline: true,
                },
                {
                    name: "<:blue_hammers:1012018248163786763> ┆ Bot developer",
                    value: `<@!700410464919879782>`,
                    inline: true,
                },
                {
                    name: "<:uoBot_icon_slash:1015552999332003850> ┆ Commands",
                    value: `\`${client.commands.size}\` commands`,
                    inline: true,
                },
                {
                    name: "<:discord:1012017257158824027> ┆ Servers",
                    value: `\`${client.guilds.cache.size}\` servers`,
                    inline: true,
                },
                {
                    name: "<:values:1012038654916579358> ┆ DataBase",
                    value: `${status[connection.readyState]}`,
                    inline: true,
                },
                {
                    name: "<:member:1012017243837702174> ┆ Members",
                    value: `\`${client.users.cache.size}\` members`,
                    inline: true,
                },
                {
                    name: "<:uo_voice_channel:1015566886303440906> ┆ Connected channels",
                    value: `\`${client.voice.adapters.size}\` channels`,
                    inline: true,
                },
                {
                    name: "<:hashtag:1012018249854091415> ┆ Channels",
                    value: `\`${client.channels.cache.size}\` channels`,
                    inline: true,
                },
                {
                    name: "<:uo_clock:1015551740281622538> ┆ Created",
                    value: `<t:${Math.round(client.user.createdTimestamp / 1000)}>`,
                    inline: true,
                },
                {
                    name: "<:uo_clock:1015551740281622538> ┆ Uptime",
                    value: `${duration}`,
                    inline: true,
                },
                {
                    name: "<:to_space:1012038751729491968> ┆ API speed:",
                    value: `\`${client.ws.ping}\`ms`,
                    inline: true,
                },
                {
                    name: "<:values:1012038654916579358> ┆ Bot memory",
                    value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` MB`,
                    inline: true,
                },
                {
                    name: "<:cpu:1012038346199023687> ┆ Bot Version",
                    value: `\`${require(`${process.cwd()}/package.json`).version}\``,
                    inline: true,
                },
                {
                    name: "<:cpu:1012038346199023687> ┆ Node.js Version",
                    value: `\`${process.version}\``,
                    inline: true,
                },
                {
                    name: "<:cpu:1012038346199023687> ┆ Discord.js Version",
                    value: `\`${Discord.version}\``,
                    inline: true,
                },
                {
                    name: "<:plane:1012017388440531015> ┆ Links",
                    value: `Add me: [[HERE]](${client.config.discord.botInvite}) \nSupport server: [[HERE]](${client.config.discord.serverInvite})`,
                    inline: false,
                }],
                type: 'editreply'
            }, interaction)
}

 