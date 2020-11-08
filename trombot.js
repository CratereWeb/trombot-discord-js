// interface Discord pour les développeurs : https://discord.com/developers/applications

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content.startsWith('/pin')) {
    message.pin()
  }
});

client.on('ready', () => {
   console.log('I am ready!'); 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
