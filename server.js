const express = require('express')
const app = express();

const mongoose = require("mongoose");

const fs = require('fs');
const ytdl = require('ytdl-core');
const console = require('console');

app.use(express.static(__dirname + '/views'));
app.set('view-engine', 'ejs')
  
  app.post('/', async (req, res) => {
    res.send("pressed")
//   console.log(process.env.mongodb_URI)
//    mongoose.connect(process.env.mongodb_URI)
//   .then(() => {
//     console.info("Connected to the database");
//   })
//   .catch(err => {
//     console.info("Cannot connect to the database!", err);
//     process.exit();
//   });
    
//   const dbSchema = {
//     id: {
//         type: String,
//         require: true,
//     },
//     url: {
//         type: String,
//         require: true,
//     }
// }
// const db = mongoose.model("id", dbSchema)
// const b = await db.findOne({id:`v4`})
//   res.send(b.url+ " here")
//     var stream = ytdl(b.url,{ quality: 'lowestaudio', format: 'webm'});
//     stream.pipe(fs.createWriteStream('./views/' + "num" + '.mp3'))
  })

app.get("/cache", async function(req, res) {
res.sendFile(__dirname + '/views/cache.html')
})

app.get("/", async function(req, res) {
res.render("home.ejs")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
