console.log("thru")
const express = require('express')
const app = express();

app.get("/", async function(req, res) {
//res.send("te")
//res.render('home.ejs')
res.sendFile(dirname + "./index.html")
// res.redirect("/")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
