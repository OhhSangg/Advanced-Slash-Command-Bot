const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = (client, node) => {
    console.log(chalk.blue(chalk.bold(`Bot`)), (chalk.white(`>>`)), chalk.red(`Lavalink`), chalk.green(`connected!`))
};