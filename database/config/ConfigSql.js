const Sequelize= require('sequelize')

const sequelize = {}

sequelize.config = new Sequelize('StudentModel', 'sa', 'Password01.', {
    host: 'localhost',
    dialect: 'mssql',
  })

module.exports = sequelize;
