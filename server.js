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

// fs.writeFile('txt.txt',"content", function (err) {
//   if (err) throw err;
//   console.log('File is created successfully.');
// })

const uri = process.env.mongodb_URI;
try {
require("dotenv").config();
console.log("1 " + uri)
let test = [];
test.push({
  testas:uri
})
console.log(test[0].testas)
   mongoose.connect(test[0].testas)
  .then(() => {
    console.info("Connected to the database");
  })
  .catch(err => {
    console.info("Cannot connect to the database!", err);
    process.exit();
  });
  
  
  
} catch (e) {
  console.log(e)
            }
fs.createWriteStream('./views/test.txt')
  app.post('/', async (req, res) => {
      //res.sendFile(__dirname + "./views/error.html")
//    mongoose.connect(process.env.mongodb_URI)
//   .then(() => {
//     console.info("Connected to the database");
//   })
//   .catch(err => {
//     console.info("Cannot connect to the database!", err);
//     process.exit();
//   });
    
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
  })

app.get("/", async function(req, res) {
//res.sendFile(__dirname + "/views/index.html")
//res.send(mongoose.env.MONGODB)
res.render("home.ejs")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
