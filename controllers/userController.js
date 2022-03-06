const md5 = require('md5');
const {User, Role} = require('../models');
const passport = require('passport')

module.exports.showRegistrationForm = async (req, res) => {
    const roles = await Role.findAll();
    res.render('users/register', {
        roles,
    })
}


module.exports.registerUser = async (req, res) => {

    const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: md5(req.body.password),
        role_id: req.body.role
    })

    res.redirect('/login');
}


module.exports.showLoginForm = (req, res) => {

    const errors = req.session.messages || [];

    res.render('users/login', {
        errors
    });
}

module.exports.loginUser = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true
});

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login')
}