const { log } = require("console");
const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("public"))

app.listen(process.env.PORT || 8000, () => console.log("servidor funcionando"))


app.get("/", (req, resp)=>{
    resp.sendFile(path.join(__dirname,"/views/home.html"))
})

