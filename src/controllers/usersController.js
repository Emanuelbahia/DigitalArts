const path = require("path");
const fs = require("fs");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const { validationResult } = require("express-validator");

const usersController = {
  register: function (req, res) {
    return res.render("register");
  },
  processRegister: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    let newUser = {
      id: users[users.length - 1].id + 1,
      firstName: req.body.name,
      lastName: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      image: req.file.filename,
    };
    users.push(newUser);

    let newUserSave = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, newUserSave, "utf-8");

    return res.send("no tienes errores");
  },
};

module.exports = usersController;
