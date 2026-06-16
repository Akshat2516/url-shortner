const URL = require('../models/url');
const { nanoid } = require('nanoid');

const handleCreateShortUrl = async(req, res) => {
    const body = req.body;
    if(!body.url) {
        return res.status(400).json({error: "url is required"});
    }
    const shortId = nanoid(7);
    console.log(req.user);
    const url = await URL.create({
        shortID: shortId,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    console.log(url);
    const urls = await URL.find({createdBy: req.user._id});
    return res.render("home", {allurls: urls, id: shortId});
    // return res.render("home", {id: shortId});
    // return res.status(201).json({status: "short url created successfully", id: shortId});
};

const handleRedirectShortUrl = async (req, res) => {
    const shortId = req.params.id;
    const url = await URL.findOneAndUpdate({shortID: shortId}, {
        $push: {
            visitHistory: {timestamp: Date.now()},
        },
    });
    res.redirect(url.redirectURL);
};

const handleShortUrlAnalyticsForm = async (req, res) => {
    return res.render("analyticsForm");
};

const handleShortUrlAnalytics = async (req, res) => {
    const shortId = req.body.shortId;
    const url = await URL.findOne({shortID: shortId});
    return res.render("analyticsForm", {
        shortId: shortId,
        clicks: url.visitHistory.length,
        analytics: url.visitHistory,
    });
    // return res.json({totalClicks: url.visitHistory.length, analytics: url.visitHistory});
};

module.exports = {handleCreateShortUrl, handleRedirectShortUrl, handleShortUrlAnalyticsForm, handleShortUrlAnalytics};