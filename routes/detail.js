const {Router} = require("express")
const router = Router()
const DetailController = require('../controllers/detail')

router.get('/detail/:id', DetailController.showDetailItem)

module.exports = router