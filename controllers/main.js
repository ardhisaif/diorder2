const {item} = require("../models/index")
const formatUang = require("../helpers/formatAngka").convertToRupiah

class MainController{
    

    static showMain(req, res){
        item.findAll()
            .then(data => {
                res.render('main', {item:data,formatUang})
            })
    }

}

module.exports = MainController