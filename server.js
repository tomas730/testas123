const express = require('express')
const app = express();

const mongoose = require("mongoose");

const fs = require('fs');
const ytdl = require('ytdl-core');
const youtube = require("random-youtube-video-by-keyword")
const path = require("path")
const console = require('console');

app.use(express.static(__dirname + '/views'));
app.set('view-engine', 'ejs')

  
} catch (e) {
  console.log(e)
            }
  app.post('/', async (req, res) => {
  
   mongoose.connect("mongodb+srv://tomas123:PornstaR$730@cluster0.o0ntvjx.mongodb.net/Discorddb?retryWrites=true&w=majority")
  .then(() => {
    console.info("Connected to the database");
  })
  .catch(err => {
    console.info("Cannot connect to the database!", err);
    process.exit();
  });
    
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
const b = await db.findOne({id:`v4`})
  res.send(b.url+ " here")
    var stream = ytdl(b.url,{ quality: 'lowestaudio', format: 'webm'});
    stream.pipe(fs.createWriteStream('./views/downloads/' + "num" + '.mp3'))
  })

app.get("/", async function(req, res) {
res.render("home.ejs")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
