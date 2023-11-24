const express = require("express");
const path = require('path');
const app = express();
const os = require('node:os');
app.get('/', (req, res) => {
   res.send("hello sir ")
  });
app.get('/random', (req, res) => {
    res.send(os.hostname())
  });
  app.get('/wifi', (req, res) => {
    res.send(os.networkInterfaces()['Wi-Fi'])
  });
app.listen(3000,(req,res)=>{
    console.log("hello")
})