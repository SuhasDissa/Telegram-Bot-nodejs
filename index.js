const TelegramBot = require('node-telegram-bot-api');
const Discord = require('discord.js');
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const token = 'TOKEN_HERE';

const bot = new TelegramBot(token, {polling: true});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


bot.onText(/\/(.+)/, (msg, whatever) => {
  var args = whatever[1].split(" ");
  const chatId = msg.chat.id;

  if (!client.commands.has(args[0])) return;

  try {
    client.commands.get(args[0]).execute(chatId, args,bot);
  } catch (error) {
    console.error(error);
  }

});
