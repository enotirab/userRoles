const {Role, User, Permission} = require('../models');

module.exports.renderPermissions = async (req, res) => {
    res.render('role')
}

module.exports.renderAccounting = (req, res) => {
   res.render("pages/accounting")
}

module.exports.renderMarketing = (req, res) => {
    res.render("pages/marketing")
}

module.exports.renderHr = (req, res) => {
    res.render("pages/hr")
}

module.exports.renderSales = (req, res) => {
    res.render("pages/sales")
}