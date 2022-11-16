const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('View the minecraft server system')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Get information about the minecraft category commands')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ip')
                .setDescription('Show Minecraft Server IP')
        )
          .addSubcommand(subcommand =>
            subcommand
                .setName('mcskin')
                .setDescription('See the skin of a minecraft user')
                .addStringOption(option => option.setName('name').setDescription('The username of the player').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('mcstatus')
                .setDescription('See the status of a minecraft server')
                .addStringOption(option => option.setName('ip').setDescription('The ip of the mc server').setRequired(true))
      )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        client.loadSubcommands(client, interaction, args);
    },
};

 