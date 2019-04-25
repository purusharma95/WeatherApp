const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use('/',express.static(__dirname + '/dist/weather-app'));


app.listen(process.env.PORT || 8080);