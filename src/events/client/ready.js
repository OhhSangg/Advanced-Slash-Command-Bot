const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = async (client) => {
  const activities = [
        { name: `${client.guilds.cache.size} Servers`, url: "https://www.twitch.tv/#", type: 1 },
        { name: `${client.channels.cache.size} Channels`,url: "https://www.twitch.tv/#", type: 1 }, 
        { name: `/minecraft`, url: "https://www.twitch.tv/#", type: 1 }, 
        { name: `/help`, url: "https://www.twitch.tv/#", type: 1 }, //all streaming :D
    ];
    const status = [
        'online'
    ];
    let i = 0;
    setInterval(() => {
        if(i >= activities.length) i = 0
        client.user.setActivity(activities[i])
        i++;
    }, 5000);
  
    let s = 0;
    setInterval(() => {
        if(s >= activities.length) s = 0
        client.user.setStatus(status[s])
        s++;
    }, 30000);

    client.player.init(client.user.id);    
  console.log(chalk.blue(chalk.bold(`Discord`)), (chalk.white(`>>`)), chalk.red(`${client.user.username}`), chalk.green(`Logged in!`))
}

 