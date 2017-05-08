const Discord = require('discord.js');
const client = new Discord.Client();

// Debug message for on ready
client.on('ready', () => {
  console.log('Buy my game!');

  console.log("Connected to " + Object.keys(client.guilds).length + " server(s).");

});

//config
let botConfig = require('./config.json');

// On message, process commands
client.on('message', message => {

  if (message.content) {

    let fallout = message.content.match(/(Fallout|fallout)/);
    let skyrim = message.content.match(/(Skyrim|skyrim)/);
    let bethesda = message.content.match(/(Bethesda|bethesda)/);

    if (fallout && message.author.bot == false) {
    message.channel.send("Hey! I heard you were talking about Fallout. If you liked that, then I think you'd love Fallout 4 and the new DLC that's just come out!");
    }

    if (skyrim && message.author.bot == false) {
    message.channel.send("Hey! I heard you were talking about Skyrim. If you liked that, then I think you'd love Skyrim: Special Edition and the new DLC that's just come out!");
    }

    if (bethesda && message.author.bot == false) {
    message.channel.send("Hey! I heard you were talking about my company. If you like us, then I think you'll love the new games we've got coming out, including Skyrim: Special Edition and the new Fallout 4 DLC!");
    }

  };

});

client.login(botConfig.apikey);
