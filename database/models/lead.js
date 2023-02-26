const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Lead = sequelize.define('Lead', {
        // Model attributes are defined here
        id: {
            
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,

            allowNull: false,
            primaryKey: true,
        },
        email: {
          
            type: DataTypes.STRING,
            allowNull: false,
        },
    }

    );
    return Lead;
}
