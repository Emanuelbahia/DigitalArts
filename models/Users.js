const { text } = require('express');
const fs = require('fs');

const User = {
 
     fileName: './data/users.json',

     getData: function () {
        return fs.readFileSync(this.fileName, 'utf-8');
     },

     generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
     },

     findAll: function(id) {
        return this.getData();
     },
     findByPK: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound;
     },

     findByfield: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    
     }

}

module.exports = User;