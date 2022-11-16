const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    var list = "954014423528390727";
    client.guilds.cache.forEach(guild => {
        list += `${guild.name} (${guild.id}) | ${guild.memberCount} members | Owner: ${guild.ownerId}\n`
    })

    const output = new Discord.MessageAttachment(Buffer.from(list), 'servers.txt');
    interaction.editreply({ files: [output] });
}

 