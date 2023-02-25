const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Lead', {
        // Model attributes are defined here
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING
        },
    });
    return Lead;
}
