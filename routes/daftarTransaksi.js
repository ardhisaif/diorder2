const {Router} = require("express")
const router = Router()
const DaftarTransaksiController = require('../controllers/daftarTransaksi')


router.get('/daftarTransaksi', DaftarTransaksiController.show)
router.post('/daftarTransaksi', DaftarTransaksiController.add)

module.exports = router