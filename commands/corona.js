const request = require("request");
module.exports = {
	name: 'corona',
	description: 'Ping!',
	execute(chatId, args,bot) {
        const localurl = "https://hpb.health.gov.lk/api/get-current-statistical";
    request(localurl, function(error, responselk, bodylk) {
      let covidlk = JSON.parse(bodylk);
  
      const corona_str = `COVID-19 CASES SRI-LANKA\n☣️ Total cases: ${covidlk.data.local_total_cases}\n🔴 Active cases: ${covidlk.data.local_active_cases}\n♻️ Recovered: ${covidlk.data.local_recovered}\n⚰️ Dead: ${covidlk.data.local_deaths}\n➕ New Cases: ${covidlk.data.local_new_cases}`
        bot.sendMessage(chatId,corona_str)
    });
	},
};

