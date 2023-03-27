
module.exports = {
    up:  (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', {
        id:{
            allowNull:false,
            primaryKey:true,
            type:Sequelize.UUID,
            defaultValue:Sequelize.UUIDV4,
        },
        email: {
            allowNull:false,
            type:Sequelize.STRING
        },
        password: {
            allowNull:false,
            type:Sequelize.STRING
        }       
      });
    },
    down:  (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
    }
  };