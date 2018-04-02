const express = require('express');
const path = require('path')
const glob = require('glob');
const app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine','ejs');
app.use(express.static('./public'));

const controllers = glob.sync('./app/controllers/*.js');
  	controllers.forEach((controller) => {
    require(controller)(app);
});
  
app.listen(8080);
console.log('localhost:8080');