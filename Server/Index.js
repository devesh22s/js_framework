const http = require("http")
const fs = require("fs")
const url = require("url")
//  express do the work of handler easily
const express = require("express")  

 
const app = express();
app.get("/", (req, res)=>{
    return res.send("hello this is home page")
})
app.get("/about", (req, res)=>{
    return res.send("this is about page "+ "hey "+ req.query.name + " and you are at the age of " +req.query.age)
})






// function handler(req, res){

//         //  understanding the url
//         if(req.url == "/favicon.ico") return res.end();
     
//         const myurl = url.parse(req.url, true)
//         // console.log(myurl)
//         const log = `${Date.now()}:  ${req.method}: ${req.url}: new request recieved\n`
//         fs.appendFile("./log.txt", log, (err, result)=>{
//             switch (myurl.pathname) {
//                 case "/":
//                     if(req.method == "GET"){
//                     res.end("home page")
                    
                    
//                     }
//                     // console.log(myurl);
                    
                   
    
                    
//                     break;
//                 case '/about':
//                     const username = myurl.query.myname 
//                     res.end(`hi ${username}`) 
//                     console.log(req)
                    
//                     break;  
                    
//                     //  yt working
//                     case '/search':
//                     const search_quary = myurl.query.search_quary
//                     res.end('this is result for '+search_quary)
//                     break;
    
//                     case '/signup':
//                         if(req.method == "GET") res.end("this is a sign up from");
//                         else if(req.method =="POST"){
//                             //  database quaery
//                             res.end("Success");
                            
//                         }
//                         default: res.end("404 Not found")
//                         break;
//                     }
                    
//                 })
// }

// console.log(req.headers); // headers has bunch of information
// const myserver = http.createServer(handler) 






app.listen(8002, ()=>{
    console.log("Server started");
    
})





