require('./system/initEnv');
const express = require('express');
const bot = require('./linebot');
const app = express();

const linebotParser = bot.parser();
app.post('/', linebotParser);

app.listen(process.env.PORT, () => {
  console.log('server is listening on port:' + process.env.PORT);
});