const { getUser } = require("../services/auth");

const restrictToLoggedInUserOnly = async (req, res, next) => {
    const uid = req.cookies?.uid;
    if(!uid) return res.redirect("/login");
    const user = getUser(uid);
    if(!user) return res.redirect("/signup");
    
    req.user = user;
    
    next();
};

const checkAuth = async (req, res, next) => {
    const uid = req.cookies?.uid;

    const user = getUser(uid);
    
    req.user = user;
    
    next();
};

module.exports = { restrictToLoggedInUserOnly, checkAuth };