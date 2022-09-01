const express = require('express')
const app = express();
const mongoose = require("mongoose");
const fs = require('fs');
const ytdl = require('ytdl-core');
const youtube = require("random-youtube-video-by-keyword")
const path = require("path")
const mongoDB_URI = process.env.MONGODB

app.use(express.static(__dirname + '/views'));
app.set('view-engine', 'ejs')

  app.post('/', async (req, res) => {
      res.sendFile(__dirname + "./views/error.html")
    try{
mongoose.connect(mongoDB_URI).then(res.send("on"))
    } catch(e) {
      console.error(e)
    }
  })

app.get("/", async function(req, res) {
//res.sendFile(__dirname + "/views/index.html")
//res.send(mongoose.env.MONGODB)
res.render("home.ejs")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
