console.log("thru")
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const fs = require('fs');
const ytdl = require('ytdl-core');
const youtubeScraper = require("yt-search");
const youtube = require("random-youtube-video-by-keyword")
const path = require("path")
const key = process.env.key

app.get("/test", async function(req, res) {
res.send("te")
//res.sendFile(dirname + "./views/index.html")
})

app.use(express.json())
app.use(express.static(__dirname + '/views'));

mongoose.connect(process.env.mongoose)

app.set('view-engine', 'ejs')

app.get("/", async function(req, res) {
res.render('home.ejs')
})


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
      res.sendFile(__dirname + "/views/error.html")
      return;
  } else {
    const ytdata = await ytdl.getBasicInfo(b.url);
    if(req.body.option === "on") {

    let numbers = 0;
    const commandFolders = fs.readdirSync('./views/downloads');
    for (let i = 0; i < commandFolders.length; i++) {
    const commandFiles = fs.readdirSync(`./views/downloads`).filter(file => file.endsWith('.mp3'))
      console.log(commandFiles)
      if(commandFiles.includes(`${b.id}.mp3`)) {
        numbers++;
      }
    }
    if(numbers === 0) {
      console.log(ytdata.videoDetails.title)
      const title_sliced = ytdata.videoDetails.title.slice(0,-7)
      const keyword = title_sliced + " DNMO Remix"


      var stream1 = ytdl(b.url,{
        quality: 'lowestaudio',
        format: 'webm'
      });

      stream1.on('end', () => {
        console.log("load 2 song")
        // res.send("Loaded 1 song, loading suggestions.")
          youtube.getRandomVid(key, keyword, async function(err , data) {
            const url =  "https://www.youtube.com/watch?v=" + data.id.videoId;
            const ytdata1 = await ytdl.getBasicInfo(url);
            const scrapper = require("youtube-scrapper")
            const video = await scrapper.getVideoInfo(data.id.videoId)
            console.log(video.details.duration)
            console.log(url)

          if(data.id.videoId !== b.url.slice(32) && video.details.duration <= 600000) {
            var stream = ytdl(url,{
              quality: 'lowestaudio',
              format: 'webm', 
              bitrate: 320, 
              highWaterMark: 1 << 25, 
              encoderArgs: ['-af',"bass=g=20"], 
              opusEncoded: true,
              type: 'opus'
            });
    
            stream.on('end', () => {
              res.render('autoplay.ejs', {name : ytdata.videoDetails.title, name1 : ytdata1.videoDetails.title, id: b.id, id1: b.id +"-"+ data.id.videoId})
              setTimeout(function () {
                fs.unlink(path.join("views/downloads", b.id + ".mp3"), (err) => {
                  if (err) {
                    console.error(err)
                    return
                  }
                })
              }, 120800);
              setTimeout(function () {
                fs.unlink(path.join("views/downloads/from-autoplay", b.id +"-"+ data.id.videoId + ".mp3"), (err) => {
                  if (err) {
                    console.error(err)
                    return
                  }
                })
              }, 120800);
            })
            
            stream.pipe(fs.createWriteStream('./views/downloads/from-autoplay/' + b.id +"-"+ data.id.videoId +'.mp3'))
          } else {
    return res.render('index.ejs', {name : b.id, error: `Suggestion is longer than 10 min.`, name: ytdata.videoDetails.title})
    }
  })
        })
        stream1.pipe(fs.createWriteStream('./views/downloads/' + b.id + '.mp3'))
    } else {
      res.render('autoplay.ejs', {name : ytdata.videoDetails.title, name1 : "Suggestion failed to load, after refresh", id: b.id, id1: "3"})
    }
  }

    if(req.body.option === "off") {
      var stream = ytdl(b.url,{ quality: 'lowestaudio', format: 'webm', bitrate: 320, highWaterMark: 1 << 25, encoderArgs: ['-af',"bass=g=20"], opusEncoded: true,
      type: 'opus',});

        stream.on('end', () => {
          res.render('index.ejs', {id : b.id, error: `\u200b`, name: ytdata.videoDetails.title})
          setTimeout(function () {
            fs.unlink(path.join("views/downloads", b.id + ".mp3"), (err) => {
              if (err) {
                console.error(err)
                return
              }
            })
          }, 50800);
        })
        stream.pipe(fs.createWriteStream('./views/downloads/' + b.id + '.mp3'))
      }
    }

})
app.listen(3000, function() {
    console.log("server on 3000 port")
})
