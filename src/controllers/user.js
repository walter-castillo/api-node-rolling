const bcrypt = require('bcryptjs');
const User = require('../models/user')

const userCreate = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();
        res.status(201).json({
            msg: "Usuario creado con éxito!",
            user
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const usersAll = async(req, res) => {
    try {
        const users = await User.find()
        res.json({
            msg: "Mostrar todos los usuarios",
            users
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const userShow = async(req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id)
            // if (!user) res.json({ msg: "No existe el id solicitado" })
        res.json({
            msg: "Mostrar usuario  específico",
            user
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const userUpdate = async(req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        await User.findByIdAndUpdate(id, { name, email, password })
        res.json({
            msg: "usuario actualizado"
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const userDelete = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({
            msg: "usuario eliminado"
        })
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