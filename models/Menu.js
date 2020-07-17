const db = require('./db')

const Menu = db.sequelize.define('menu', {
    class: {
        type: db.Sequelize.STRING,
            require: true
    },
    name: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc: {
        type: db.Sequelize.TEXT,
        require: true
    },
    valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },
})

//Menu.sync({ force: true })

module.exports = Menu