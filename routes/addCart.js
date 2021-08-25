const {Router} = require("express")
const router = Router()
const AddCartController = require('../controllers/addCart')   


router.get('/addCart/:id', AddCartController.add)

module.exports = router