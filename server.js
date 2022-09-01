const express = require('express')
const app = express();

app.get("/", async function(req, res) {
res.send("te")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
