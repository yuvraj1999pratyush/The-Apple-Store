const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true

    },

    {
        name: 'Pratyush Yuvraj',
        email: 'pratyush@example.com',
        password: bcrypt.hashSync('12345', 10)

    },

    {
        name: 'Simran Jain',
        email: 'simran@example.com',
        password: bcrypt.hashSync('12345', 10)

    },

]

module.exports = users;