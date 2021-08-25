const {Router} = require("express")
const router = Router()
const ShopingListController = require('../controllers/shopingList')   

router.get('/shopingList', ShopingListController.showShopingList)

module.exports = router