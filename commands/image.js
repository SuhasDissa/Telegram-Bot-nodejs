const request = require("request");
const cheerio = require("cheerio");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function image(search, chatId,bot) {

    const options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }

        $ = cheerio.load(responseBody);

        const links = $(".image a.link");

        const urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        if (!urls.length) {
            return;
        }
        try {
            bot.sendPhoto(chatId, urls[getRndInteger(0, urls.length)]);
        } catch (error) {
            console.error(error);
        }

    });

}
module.exports = {
    name: 'image',
    description: 'Ping!',
    execute(chatId, args,bot) {
        args.shift();
        if (args.length < 1) {
            bot.sendMessage(chatId,"I Couldn't find a matching image."
            );
        } else if (args[0] == "random") {
            var randht = getRndInteger(100, 800);
            var randwdth = getRndInteger(100, 800);
            var link = "https://picsum.photos/" + randht + "/" + randwdth;
            bot.sendMessage(chatId, link);

        } else if (args[0] == "cat") {
            var randht = getRndInteger(100, 800);
            var randwdth = getRndInteger(100, 800);
            var link = "http://placekitten.com/" + randht + "/" + randwdth;
            bot.sendMessage(chatId, link);

        } else {

            var term = args.join("+");

            image(term, chatId,bot);
        }
    },
};