const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Fragz') {
    	message.channel.send('Your one and only....');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'Peep') {
    	message.reply('Our goose god.');
  	}
});

client.on('message', message => {
    if (message.content === 'Duck') {
    	message.reply('That guy who streams... Yeah.
  	}
});

//THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
