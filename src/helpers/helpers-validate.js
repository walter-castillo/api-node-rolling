const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = async(role = "") => {
    const existRole = await Role.findOne({ role });
    if (!existRole) throw new Error(`El rol ${role} no existe en la BD`)
};

const emailExist = async(email) => {
    const existEmail = await User.findOne({ email });
    if (existEmail) throw new Error(`El correo ${email} ya existe en la BD`)
};

module.exports = {
    isRoleValid,
    emailExist
}