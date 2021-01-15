module.exports = {
	name: 'help',
	description: 'Ping!',
	execute(chatId, args,bot) {
        bot.sendMessage(chatId,'HELP\nYou can use following commands\nFind images from the web - /image [whatever]\nFind riddles - /riddle\nFind jokes - /joke\nGet a random emoji - /emoji\nSee if Im online - /ping\n🔜😲 Coming Soon - [memes,meme generator]');
	},
};