const {createUser} = require('../Controllers/CRUDcontroller');
const express= require('express');
const router= express.Router();

router.post('/', createUser)


module.exports = router;