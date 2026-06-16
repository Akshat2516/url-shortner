const User = require('../models/user');
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
    const token = setUser(user);
    res.cookie('uid', token);
    return res.redirect('/');
};

module.exports = { handleUserSignup, handleUserLogin };