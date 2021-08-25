const {Router} = require("express")
const router = Router()
const LoginController = require('../controllers/LoginController')


router.get('/login', LoginController.showLogin)
router.post('/loginTest', LoginController.checkLogin)

module.exports = router