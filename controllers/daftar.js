
const {customer} = require("../models/index")

class DaftarController{
    
    static showDaftar(req, res){
        res.render("daftar")
    }

    static showLogin(req, res){
        res.render("login")
    }
    
    static addUser(req, res){
        const {username,password,email} = req.body;
        
        customer.create({name:username, password, email})
            .then(data =>{
                console.log('masuk');
                req.session.customerId = data.id
                res.redirect('/main') 
            })
            .catch((err) => {
                console.log(err);
                res.send("testing")
            })
    }

}

module.exports = DaftarController 