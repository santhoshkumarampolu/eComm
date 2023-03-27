const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // Model attributes are defined here
        id: {
            
            type: DataTypes.INTEGER,
            defaultValue: 1,

            allowNull: false,
            primaryKey: true,
        },
        email: {
          
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }

    );
    return User;
}
