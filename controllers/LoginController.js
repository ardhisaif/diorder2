
const {customer} = require("../models/index")
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10);

class LoginController{
    
    static showLogin(req, res){
        res.render("login")
    }

    static checkLogin(req, res){
        const {name,password} = req.body;
        
        customer.findOne({ where: {name:name} })
            .then(data => {
                const verified = bcrypt.compareSync(password, data.password);
                if (!verified) {
                    res.send("username dan password gk cocok")
                }else{
                    req.session.customerId = data.id
                    res.redirect("main")
                }
            })
            .catch( err => res.send(err))
    }

}

module.exports = LoginController