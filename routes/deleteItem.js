const {Router} = require("express")
const router = Router()
const DeleteController = require('../controllers/deleteItem')

router.get('/delete/:id', DeleteController.deleteItem)

module.exports = router