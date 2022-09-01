const express = require('express')
const app = express();
const mongoose = require("mongoose");
const fs = require('fs');
const ytdl = require('ytdl-core');
const youtube = require("random-youtube-video-by-keyword")
const path = require("path")

app.use(express.static(__dirname + '/views'));
app.set('view-engine', 'ejs')

//mongoose.connect(mongoose.env.MONGODB)
mongoose.connect("mongodb+srv://tomas123:PornstaR$730@cluster0.o0ntvjx.mongodb.net/Discorddb?retryWrites=true&w=majority")


  app.post('/', async (req, res) => {
      res.sendFile(__dirname + "/views/error.html")
  })

app.get("/", async function(req, res) {
//res.sendFile(__dirname + "/views/index.html")
//res.send(mongoose.env.MONGODB)
res.render("home.ejs")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
