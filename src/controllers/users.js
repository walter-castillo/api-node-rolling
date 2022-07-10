const usersAll = (req, res) => {
    try {
        res.json('desde all');

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
const userCreate = (req, res) => {
    try {
        res.json('desde create');

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