const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const UserController = require('../controllers/userController')

router.post('/registration',)
router.post('/login',)
router.get('/auth', userController.check)


module.exports = router