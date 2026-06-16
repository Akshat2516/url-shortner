const jwt = require('jsonwebtoken');
const secretKey = "yousabitch"

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
    }, secretKey);
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token, secretKey);
    }
    catch(err) {
        return null;
    }
}

module.exports = { setUser, getUser };