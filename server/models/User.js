const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create new Schema
const UserSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    resetToken : {
      type : String,
      expireToken : Date,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = User = mongoose.model('User', UserSchema);