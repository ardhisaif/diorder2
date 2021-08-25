const {ShopingList,item,customer} = require("../models/index");

class ShopingListController{
    
    static add(req, res){
        ShopingList.findAll({where:{customerId : req.session.customerId ,itemId: req.params.id}})
            .then(data => {
                const total = data[0].total
                const id = data[0].id
                if (data) {
                    return ShopingList.update({
                        total: total + 1
                    },{
                        where:{
                            id:id
                        }
                    })
                    
                }
            })
            .then(()=>{
                res.redirect('/shopingList')
            })
            .catch(() => {
                ShopingList.create({
                        itemId: req.params.id,
                        customerId: req.session.customerId,
                        total: 1,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }).then(()=>{
                        res.redirect('/shopingList')
                    })
            })
    }

}

module.exports = ShopingListController