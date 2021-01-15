module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(chatId, args,bot) {
        bot.sendMessage(chatId,'pong');
	},
};