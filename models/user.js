'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            //
            User.belongsTo(models.Role, {
                as: 'role',
                foreignKey: 'role_id',
            });
        }

        can(action) {

            let match = this.role.permissions.find((permission) => permission.name === action);
            console.log({
                action,
                perms: this.role.permissions.map( p => p.name),
                match: !!match
            });
            if(match) return true;
            return false;

        }

    };
    User.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};