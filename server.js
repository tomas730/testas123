const express = require('express')
const app = express();
const mongoose = require("mongoose");
const fs = require('fs');
const ytdl = require('ytdl-core');
const youtube = require("random-youtube-video-by-keyword")
const path = require("path")


app.use(express.static(__dirname + '/views'));
app.set('view-engine', 'ejs')


mongoose.connect(mongoose.env.MONGODB)
const dbSchema = {
    id: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        require: true,
    }
}
const db = mongoose.model("id", dbSchema)

  app.post('/', async (req, res) => {
      const b = await db.findOne({id:`${req.body.upvote}`})
      if(!b || b === "null") {
          res.send("found")
      }
    console.log(req.body.upvote)
    console.log(req.body.option)
      res.sendFile(__dirname + "/views/error.html")
  })
//test

app.get("/", async function(req, res) {
//res.sendFile(__dirname + "/views/index.html")
//res.send(mongoose.env.MONGODB)
res.render("home.ejs")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
