const db = require("../../database/models");

const usersAPIController = {
  list: (req, res) => {
    db.Users.findAll().then((users) => {
      let respuesta = {
        meta: {
          status: 200,
          total: users.length,
          url: "api/users",
        },
        data: users,
      };
      res.json(respuesta);
    });
  },

  lastUser: (req, res) => {
    db.Users.findOne({
      order: [["id", "DESC"]],
    }).then((user) => {
      let respuesta = {
        meta: {
          status: 200,
          total: user.length,
          url: "api/users/last",
        },
        data: user,
      };
      res.json(respuesta);
    });
  },

  detail: (req, res) => {
    db.Users.findByPk(req.params.id).then((user) => {
      let respuesta = {
        meta: {
          status: 200,
          //  total: user.length,
          url: "api/user/:id",
        },
        data: user,
      };
      res.json(respuesta);
    });
  },
};

module.exports = usersAPIController;
