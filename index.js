const express = require("express");
const app = express();
const port = 8080;
const path = require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/view"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
 
let posts = [
    {
        user : "Bhuvan",
    content : "Go with the flow"
    },
    {
        user : "Adhi",
        content : "All goes well"
    },
    {
        user : "Rome",
        content : "A beautiful contry"
    }

];


app.get("/post" ,(req,res)=>{
    res.render("index.ejs",{posts});
})


app.get("/post/new" ,(req,res)=>{
    res.render("input.ejs");
})

app.post("/post" ,(req,res)=>{
    let {user , content} = req.body;
    posts.push({user , content});
    res.send("Post request accepted");


  
})




app.listen(port,() => {
    console.log(`App is listining to port ${port}`);

});
