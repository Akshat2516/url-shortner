const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { getUser, setUser } = require('../services/auth');

const handleUserSignup = async (req, res) => {
    const {name, email, password} = req.body;
    const user = await User.create({
        name: name,
        email: email,
        password: password,
    });
    console.log(user);
    return res.redirect('/');
};

const handleUserLogin = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email, password: password});
    if(!user) {
        return res.render('signup', {error: "Invalid Email or Password"});
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uid', sessionId);
    return res.redirect('/');
};

module.exports = { handleUserSignup, handleUserLogin };