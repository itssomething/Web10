const express = require('express');
const Router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');

Router.get('/', (req, res)=>{
    // res.render("about");
    res.render("ask", {
        layout: "main",
    });
});

Router.post('/', (req, res) => {
    var data = fs.readFileSync("./public/question.json");
    let word = JSON.parse(data);
    let question = req.body;
    console.log(req.body);
    question.id = word.length+1;
    word.push(question);
    fs.writeFile('./public/question.json', JSON.stringify(word), (err) => {
        if (err) {console.log(err);}
    });
    res.redirect("/question/" + question.id);
});

// Router.get('/sub', (req, res)=>{
//     res.send({
//         a: 4,
//         b: 5
//     });
// });

// Router.post('/', (req, res)=>{
// });

module.exports = Router;