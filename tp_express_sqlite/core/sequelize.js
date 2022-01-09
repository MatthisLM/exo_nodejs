const { Sequelize, Model, DataTypes } = require('sequelize');
const  sequelize = new Sequelize('sqlite::memory:');

(async () => {
    await sequelize.sync();
})();

class User extends Model {}

User.init({
    lastName: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    github: DataTypes.STRING
}, { sequelize, modelName:'user'})

module.exports = {
    sequelize,User
}