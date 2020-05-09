const express = require('express')
const router = express.Router()

//adionando models para carregamento do db nas paginas
const HeaderNav = require('../models/HeaderNav')
const PagHome_slideshow = require('../models/PagHome_Slideshow')
const HistoryHome = require('../models/HistoryHome_models')
const Footer = require('../models/Footer_models')
const Contato = require('../models/Contato')

router.get('/', (req, res) => {
    res.render('admin/dashboard', { layout: 'dashboard.handlebars' })
})

router.get('/edit-pages', (req, res) => {
    res.render('edit-admin/edit-pages', { layout: 'dashboard.handlebars' })
})

router.get('/edit-nav', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('edit-admin/edit-nav', { layout: 'dashboard.handlebars', nav: nav })
    })
})

router.get('/edit-home', (req, res) => {
    PagHome_slideshow.findOne().then((slideshow) => {
        res.render('edit-admin/edit-home', { layout: 'dashboard.handlebars', slideshow: slideshow })
    }).catch((err) => {
        res.send('Error: ' + err)
    })
})

router.get('/edit-history', (req, res) => {
    HistoryHome.findOne().then((history) => {
        res.render('edit-admin/edit-history', { layout: 'dashboard.handlebars', hisHome: history })
    }).catch((err) => {
        res.send('Error: ' + err)
    })
})

router.get('/edit-footer', (req, res) => {
    Footer.findOne().then((footer) => {
        res.render('edit-admin/edit-footer', { layout: 'dashboard.handlebars', footer: footer })
    }).catch((err) => {
        res.send('Erro ao carregar models footer: ' + err)
    })
})

router.get('/edit-contato', (req, res) => {
    Contato.findOne().then((contato) => {
        res.render('edit-admin/edit-contato', { layout: 'dashboard.handlebars', contato: contato })
    }).catch((err) => {
        res.send('Erro ao carregar a pagina edit-contato' + err)
    })
})

module.exports = router