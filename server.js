var connectServer = require("connect");
var staticServer = require('serve-static');
connectServer().use(staticServer(__dirname)).listen(1990);
console.log('Started server at your birth year :P');