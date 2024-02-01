const { Schema, model } = require('mongoose')

const User = new Schema({
    login: {
        type: String,
        unuqued: true,
        require: true
    },
    password: {
        type: String,
        require: true        
    },
    email: {
        type: String,
        require: true
    }
})

module.exports = model('User', User)