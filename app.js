const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const routes = require("./routes/index")
const session = require("express-session")
const cookieParser = require('cookie-parser');
const sequelize = require("sequelize")

app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public")) 
// app.use(session({secret:'keep it secret!'}))
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));
app.set("view engine", "ejs")


app.use(routes)

app.listen(port,() =>{
    console.log(`server start on port${port}`)
})