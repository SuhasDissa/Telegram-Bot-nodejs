function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const values = require("../variables.js");
  
  module.exports = {
	name: 'riddle',
	description: 'Ping!',
	execute(chatId, args,bot) {
        var i = getRndInteger(0, values.riddle.length);
        bot.sendMessage(chatId,values.riddle[i]);
	},
};