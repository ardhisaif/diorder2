const bcrypt = require("bcryptjs")

class Encryption {
    static hashPassoword(password){
        const salt = bcrypt.genSaltSync(10);
        const encryption = bcrypt.hashSync(password, salt)
        return encryption
    }

}

module.exports = Encryption