var express = require('express');
var router = express.Router();

const pageController =   require('../controllers/pagesController');
const userController = require('../controllers/userController');

const redirectGuests = require('../middleware/redirectGuest')

/* GET home page. */
router.get('/', redirectGuests, function(req, res, next) {
  res.render('pages/dashboard');
});

router.get('/role',redirectGuests, pageController.renderPermissions);
router.get('/accounting',redirectGuests, pageController.renderAccounting);
router.get('/marketing',redirectGuests, pageController.renderMarketing);
router.get('/sales',redirectGuests, pageController.renderSales);
router.get('/hr',redirectGuests, pageController.renderHr);


router.get('/register', userController.showRegistrationForm);
router.post('/register', userController.registerUser);
router.get('/login', userController.showLoginForm);
router.post('/login', userController.loginUser);
router.get('/logout', userController.logout);

module.exports = router;
