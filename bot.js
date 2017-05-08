const Discord = require('discord.js');
const client = new Discord.Client();

// Debug message for on ready
client.on('ready', () => {
  console.log('Buy my game!');

  console.log("Connected to " + Object.keys(client.guilds).length + " server(s).");

});

// On message, process commands
client.on('message', message => {

  if (message.content) {

    let game = function() {
        if(message.content.includes("Bethesda")) {
            return true;
        } else if(message.content.includes("Fallout")) {
            return true;
        } else if(message.content.includes("Skyrim")) {
            return true;
        } else if(message.content.includes("bethesda")) {
            return true;
        } else if(message.conent.includes("fallout")) {
            return true;
        } else if(message.content.includes("skyrim")) {
            return true
        } else {
            return false;
        }
    }

    if (game) {
    message.channel.sendMessage("Buy my game!");
    }

  };

});

client.login(botConfig.apikey);
