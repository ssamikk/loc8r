module.exports.homeList = function (req, res) {
    res.render('location-list', { title: 'Home' });
  };

module.exports.locationInfo = function (req, res) {
  res.render('index', { title: 'Location' });
};

module.exports.addReview = function (req, res) {
  res.render('index', { title: 'Add review' });
};
