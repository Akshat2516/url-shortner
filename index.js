const express = require('express');
const { connectmongoDB } = require('./connection');
const path = require('path');
const cookieParser = require('cookie-parser');
const { restrictToLoggedInUserOnly, checkAuth } = require('./middlewares/auth');

// routers
const urlRouter = require('./routes/url');
const staticRouter = require('./routes/staticrouter');
const userRouter = require('./routes/user');

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
app.use(cookieParser());

// routes
app.use("/user", userRouter);
app.use("/URL", restrictToLoggedInUserOnly, urlRouter); // inline middleware -> restologuo
app.use("/", checkAuth, staticRouter);

app.listen(port, () => {
    console.log(`server started at PORT: ${port}!!!`);
});