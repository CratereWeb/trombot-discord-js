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

client.login(bot_secret_token);
