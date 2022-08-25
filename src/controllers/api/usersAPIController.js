const db = require('../../database/models');


const usersAPIController = {

   'list': (req, res) => {
      db.Users.findAll({
        
      })

   }





}

module.exports = usersAPIController