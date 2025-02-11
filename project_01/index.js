const express = require("express")
const userRouter = require('./routes/route')
const {connectMongoDB} = require('./views/connect.js')
const {logreqres} = require('./middleware/user.js')
const app =  express();
const port = 8080;

//  connection -->

connectMongoDB("mongodb://127.0.0.1:27017/its_me")
.then(()=> console.log("mongo db connected"))

// using middleware --  we use it because body saws undefined due express don't know in what format the data is. what it is doing taking data from frontend and change it into json and add in req.body
app.use(express.urlencoded({extended: false}))   // Parses form data
//  or we can use  --->  app.use(express.json());

app.use(logreqres("log.txt"))

//  routes
app.use('/api/user', userRouter)


app.listen(port, () => console.log(`Server start at port ${port}`))


