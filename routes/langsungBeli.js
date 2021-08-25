const {Router} = require("express")
const router = Router()
const LangsungBeli = require('../controllers/langsungBeli')   


router.get('/langsungBeli/:id', LangsungBeli.add)

module.exports = router