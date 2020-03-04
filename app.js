
const express = require('express');
const app = express();

//public folder
app.use(express.static('public'));

//set views folder
app.set('view engine', 'ejs');
//index.ejs
//speakers.ejs


//set routes
//index.js
app.use(require('./controllers/index'));
app.use(require('./controllers/albums'));
//speakers.js


app.listen(3000, ()=>{
    console.log('listening on port 3000')
});