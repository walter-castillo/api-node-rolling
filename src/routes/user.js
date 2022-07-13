const { Router } = require('express');
const { validateFields } = require("../middlewares/validateFields");
const { isRoleValid, emailExist } = require("../helpers/helpers-validate");
const { usersAll, userCreate, userShow, userDelete, userUpdate } = require('../controllers/user');
const router = Router();
const { check } = require("express-validator");

router.post('/', [
        check("name", "El nombre es obligatorio").notEmpty(),
        check("password", "La contraseña debe tener mínimo 6 caracteres").isLength({ min: 6 }),
        check("email", "El correo no es válido").isEmail(),
        check("email").custom(emailExist),
        // check("role").custom(isRoleValid),
        validateFields,
    ],
    userCreate);

router.get('/', usersAll);
router.get('/:id', userShow);
router.put('/:id', userUpdate);
router.delete('/:id', userDelete);

module.exports = router;