const {Router} = require("express")
const router = Router()
const LoginController = require('../controllers/LoginController')
const routeLogin = require("./login")
const routeDaftar = require("./daftar")
const routeMain = require("./main")
const routeDetail = require("./detail")
const routeShopingList = require("./shopingList")
const routeAddCart = require("./addCart")
const deleteItem = require("./deleteItem")
const langsungBeli = require("./langsungBeli")
const daftarTransaksi = require("./daftarTransaksi")


router.get('/', LoginController.showLogin)
router.post('/', LoginController.checkLogin)

router.use(routeLogin)
router.use(routeDaftar)
router.use(routeDetail)
router.use(routeMain)


router.use( (req,res,next)=>{
    
    if (req.session.customerId) {
        next()
    }else{
        res.redirect('/')
    }
})

router.use(routeShopingList)
router.use(routeAddCart)
router.use(deleteItem)
router.use(langsungBeli)
router.use(daftarTransaksi)


module.exports = router