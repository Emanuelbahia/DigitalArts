let db = require ("../../../database/models")
const usersControllerDb = {
    formCrear:function(req,res){
        return res.render("register")
    },
    crear: function (req, res){
    db.Users.create({
        //id: //falta codigo
        firstName: req.body.name,
        lastName: req.body.surname,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file.filename,
    })
    return res.redirect("/login")
    },
    detalle: function(req, res){
    db.Users.findByPk(req.params.id)
    return res.render("detail")
    },
}
module.exports = usersControllerDb