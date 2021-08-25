const {Router} = require("express")
const router = Router()
const MainController = require('../controllers/main')   


router.get('/main', MainController.showMain)
router.post('/main', MainController.showMain)

module.exports = router