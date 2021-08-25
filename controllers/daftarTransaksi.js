const {ShopingList,item,customer,daftarTransaksi} = require("../models/index");

class DaftarTransaksiController{
    
    static show(req, res){
        console.log("world");
    }

    static add(req, res){
        ShopingList.findAll({
            where: {
                customerId : req.session.customerId
            },
            include: [
                item,
                customer
            ]
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const itemId = data[i].itemId
                const customerId = data[i].customerId
                const total = data[i].total
                daftarTransaksi.create({itemId, customerId, total, status:true})
            }
            ShopingList.destroy({where:{customerId : req.session.customerId}})
            daftarTransaksi.findAll({
                where: {
                    customerId : req.session.customerId
                },
                include: [
                    item,
                    customer
                ]
            })
        })
        
    }
    
}

module.exports = DaftarTransaksiController 