const User = require('../models/user')

const usersAll = async(req, res) => {
    try {
        const users = await User.find()
        res.json({
            msg: "Mostrar todos los usuarios",
            status: 200,
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
            status: 200,
            user
        })
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
const userUpdate = async(req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        await User.findByIdAndUpdate(id, { name, email, password })
        res.json({
            msg: "usuario actualizado",
            status: 200
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const userDelete = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({
            msg: "usuario eliminado",
            status: 200
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