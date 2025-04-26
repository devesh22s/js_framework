const express = require('express');
const { myConnection } = require('./Connection/Connect');

const url = 'mongodb://127.0.0.1:27017/url'
myConnection(url).then(()=> console.log("mongodb connected")).catch((err)=> console.log("error occured ", err))

const urlRoute = require('./Routes/Route')
const URL = require('./Model/Model')
const port = 8081;

const path = require('path')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false})) // in home file we make form, so to handle form data we use this 

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

const staticRouter = require('./Routes/staticRouter')


//  server side rendering  -- html rendering
// app.get('/test', async(req, res)=>{
    // const allUrl = await URL.find({});
    // return res.render('home', {
    //     urls: allUrl
    // })

    // return res.send("<h1>Hey from the server.</h1>")   // here when the web page render from the server is called server side rendering.
// })






app.use("/url", urlRoute)
app.use("/", staticRouter)



app.get('/:shortid', async(req, res)=>{
    const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{ $push: {
        clickCount: {timestamp:Date.now()}
    }})
    console.log(entry);
    
    res.redirect(entry.redirectUrl)

})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})
