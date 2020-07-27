const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/menu',
        failureRedirect: '/login',
        failureFlash: true,
    })(req, res, next)
})

router.post('/register', (req, res) => {

})


module.exports = router