const {readJSONFromFile, writeJSONToFile} = require('./fs-utils')
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('MyUser', userSchema);


const getUser = (search) => {
    return !search ? User.find() : User.find({name: new RegExp(search)})
}

exports.addUser = async (name) => {
    const user = new User({name});
    return user.save()
}

exports.updateUser = (id, name) => {
    return User.update({_id: id}, {name})
}

exports.deleteUser = async (id) => {
    return User.deleteOne({_id: id})
}

exports.getUser = getUser;

