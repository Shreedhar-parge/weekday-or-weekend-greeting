import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();
// let day = 0;

if (day > 0 && day < 6){
    var week = "a weekday";
    var time = "work hard!"
}
else{
    var week = "the weekend"
    var time = "have fun!"
}

app.get("/", (req, res) => {
    res.render("index.ejs", 
    { week: week,
    time: time});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})