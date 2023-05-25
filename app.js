const { log } = require("console");
const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("public"))

app.listen(process.env.PORT || 3000, () => console.log("servidor funcionando en el puerto 3000"))


app.get("/", (req, resp)=>{
    resp.sendFile(path.join(__dirname,"/views/home.html"))
})

