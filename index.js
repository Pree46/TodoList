import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;
let newItemslist =[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", function(req,res){
    res.render("index.ejs");
})

app.post("/", function(req,res){
    const textip = req.body.newItem;
    newItemslist.push(textip);
    var n = newItemslist.length;
    res.render("index.ejs", {
        newItems:newItemslist,
        N : n
    })
})
app.listen({port}, function(){
    console.log("Server is running successfully");
})