const express = require('express')
const app = express();
const mongoose = require("mongoose");
const fs = require('fs');
const ytdl = require('ytdl-core');
const youtube = require("random-youtube-video-by-keyword")
const path = require("path")
const key = process.env.key

app.use(express.static(__dirname + '/views'));
mongoose.connect(process.env.mongoose)

app.set('view-engine', 'ejs')

app.get("/", async function(req, res) {
//res.sendFile(__dirname + "/views/index.html")
res.render("home.ejs")
})

app.listen(3000, function() {
    console.log("server on 3000 port")
})
