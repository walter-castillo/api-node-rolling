const User = require('../models/user')

const usersAll = async(req, res) => {
    try {
        const users = await User.find()
        res.json({
            msg: "Usuario creado con éxito!",
            status: 200,
            users
        })
    } catch (error) {
        res.status(400).json(error)
    }
}
const userShow = (req, res) => {
    try {
        res.json('desde show')
    } catch (error) {
        res.status(400).json(error)
    }
}
const userCreate = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        console.log(user);
        res.json({
            msg: "Usuario creado con éxito!",
            status: 200
        })
    } catch (error) {
        res.status(400).json(error)
    }
}
const userUpdate = (req, res) => {
    try {
        res.json('desde update');
    } catch (error) {
        res.status(400).json(error)
    }
}
const userDelete = (req, res) => {
    try {
        res.json('desde delete');
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    usersAll,
    userShow,
    userCreate,
    userUpdate,
    userDelete,
}