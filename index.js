var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "channel_Id",
  channelSecret: "channel_Secret",
  channelAccessToken: "channelAccess_Token"
});

bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {

      console.log(msg);

    setTimeout(function(){
        var userId = event.source.userId;
        var sendMsg = 'Hello World!';
        bot.push(userId,sendMsg);

        console.log('send: '+sendMsg);
    },2000);
    }).catch(function(error) {

      console.log('error');
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);


var server = app.listen(process.env.PORT || 8625, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
