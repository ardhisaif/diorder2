const {ShopingList,item,customer} = require("../models/index");

class DeleteController{
    

    static deleteItem(req, res){
        ShopingList.destroy({where:{id: req.params.id}})
            .then(data => {
                res.redirect(`/shopingList`)
            })
            .catch(err =>{
                res.send(err)
            })

    }

}

module.exports = DeleteController