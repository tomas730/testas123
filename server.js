const express = require('express')
const app = express();

app.get("/", async function(req, res) {
res.sendFile(__dirname + "/views/index.html")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
