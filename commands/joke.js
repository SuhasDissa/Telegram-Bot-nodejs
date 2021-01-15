const request = require("request");
module.exports = {
	name: 'joke',
	description: 'Ping!',
	execute(chatId, args,bot) {
        try {
        request("https://sv443.net/jokeapi/v2/joke/Any?type=single", function(
          error,
          response,
          bodyjoke
        ) {
          if (!error && response.statusCode == 200) {
            const randjoke = JSON.parse(bodyjoke);
            console.log(randjoke.joke);
            bot.sendMessage(chatId,randjoke.joke);
          }
        });
      } catch (error) {
        console.log(error);
      }
	},
};

