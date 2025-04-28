const express = require('express');
const path = require('path');
const { myConnection } = require('./Connection/Connect');
const urlRoute = require('./Routes/Route');
const staticRouter = require('./Routes/staticRouter');
const URL = require('./Model/Model');

// MongoDB Connection
const url = 'mongodb://127.0.0.1:27017/url';
myConnection(url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error occurred: ", err));

const app = express();
const port = 8081;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Routes
app.use("/url", urlRoute);
app.use("/", staticRouter);

// Redirect short URL to original URL
app.get('/:shortid', async (req, res) => {
    const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        { shortid: shortId },
        { $push: { clickCount: { timestamp: Date.now() } } }
    );
    if (!entry) {
        return res.status(404).send('Short URL not found');
    }
    res.redirect(entry.redirectUrl);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
