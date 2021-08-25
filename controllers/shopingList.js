const {ShopingList,item,customer} = require("../models/index");
const {convertToRupiah} = require("../helpers/formatAngka")

class ShopingListController{

    static showShopingList(req, res){
        
        ShopingList.findAll({
                    where: {
                        customerId : req.session.customerId
                    },
                    include: [
                        item,
                        customer
                    ]
            })
            .then(data =>{
                res.render('shopingList', {data, convertToRupiah})
            })
    }
}

module.exports = ShopingListController