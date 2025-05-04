//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyparser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app =  express();
const port = 3000;
var userauthorized = false;

app.use(bodyparser.urlencoded({extended:true}));

function passwordchecker(req,res,next){
    //console.log(req.body);
    const password = req.body["password"];
    if(password === "ILoveProgramming"){
        userauthorized = true;
    }
    next();
}
app.use(passwordchecker)

app.get("/",(req,res)=>{

    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{

    if(userauthorized){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
})





app.listen(port,()=>{

    console.log(`port is running: ${port}.`);
})
