const linebot = require('linebot');
const config = {
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken,
};
const bot = linebot(config);

module.exports = bot;

bot.on('message', function (event) {
  console.log(event);
});