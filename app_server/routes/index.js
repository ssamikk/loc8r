var express = require('express');
var router = express.Router();
var ctrlLocation = require('../controllers/location');
var ctrlOthers = require('../controllers/others');

/* GET страницы местоположения. */
router.get('/', ctrlLocation.homeList);
router.get('/location', ctrlLocation.locationInfo);
router.get('/location/review/new', ctrlLocation.addReview);


//Другие страницы
router.get('/about', ctrlOthers.about);

module.exports = router;
