const express = require('express');
const { handleCreateShortUrl, handleRedirectShortUrl, handleShortUrlAnalyticsForm, handleShortUrlAnalytics} = require('../controllers/url');

const router = express.Router();

// routes
router.post('/', handleCreateShortUrl);

router.get('/analytics', handleShortUrlAnalyticsForm);

router.post('/analytics', handleShortUrlAnalytics);

router.get('/:id', handleRedirectShortUrl);

module.exports = router;