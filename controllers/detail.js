const {item} = require("../models/index")
const {convertToRupiah} = require("../helpers/formatAngka")

class DetailController{
    
    static showDetailItem(req, res){
        let id = +req.params.id
        item.findAll()
            .then( data => {
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    if(item.id === id){
                        res.render('detail', {item, convertToRupiah})
                    }
                }
            })
    }

}

module.exports = DetailController