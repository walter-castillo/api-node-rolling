const { Router } = require('express');
const router = Router();
const { usersAll, userCreate, userShow, userDelete, userUpdate } = require('../controllers/user');

router.get('/', usersAll);
router.get('/:id', userShow);
router.post('/', userCreate);
router.put('/:id', userUpdate);
router.delete('/:id', userDelete);

module.exports = router;