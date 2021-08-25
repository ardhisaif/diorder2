const {Router} = require("express")
const router = Router()
const DaftarController = require('../controllers/daftar')


router.get('/daftar', DaftarController.showDaftar)
router.post('/daftar', DaftarController.addUser)

module.exports = router