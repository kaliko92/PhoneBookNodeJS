const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res){
    return res.render('auth/register')    
}


function login(req, res) {
    return res.render('auth/login')    
}


module.exports = {
    signUp: signUp,
    login: login,
}