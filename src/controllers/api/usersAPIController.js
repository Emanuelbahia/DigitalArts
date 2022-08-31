const db = require('../../database/models');


const usersAPIController = {

   'list': (req, res) => {
      db.Users.findAll()
        .then(users => {
         let respuesta = {
            meta: {
               status : 200,
               total: users.length,
               url: 'api/users'
            },
            data: users
         }
            res.json(respuesta)
        })
        
   },

   'detail' : (req, res) => {
      db.Users.findByPk(req.params.id)
        .then( user => {
         let respuesta = {
            meta: {
               status: 200,
               total: user.lenght,
               url: 'api/user/:id'
            },
            data: user
         }
         res.json(respuesta);
        });
   }

}

module.exports = usersAPIController