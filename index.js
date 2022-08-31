console.log("thru")
const express = require('express')
const app = express();
const bodyParser = require("body-parser")
app.use(express.static(__dirname + '/views'));

app.set('view-engine', 'ejs')

app.get("/", async function(req, res) {

//res.render('home.ejs')
res.sendFile(__dirname + "./views/index.html")
// res.redirect("/")
})

app.listen(443, function() {
    console.log("server on 443 port")
})
