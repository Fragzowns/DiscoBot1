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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDE5MTk4Mzc1MDE2MDA1NjQy.DYyClA.VmV2E3da0abpdiNNXulU26wueCE);
