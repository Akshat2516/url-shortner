const express = require('express');
const { connectmongoDB } = require('./connection');
const urlRouter = require('./routes/url');
const staticRouter = require('./routes/staticrouter');
const path = require('path');

const app = express();
const port = 8000;

// connect mongodb
connectmongoDB("mongodb://localhost:27017/mockUrl")
.then( () => console.log("mongodb connected !!!"));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// middleware to access user i/p in post
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/URL", urlRouter);
app.use("/", staticRouter);

app.listen(port, () => {
    console.log(`server started at PORT: ${port}!!!`);
}); 