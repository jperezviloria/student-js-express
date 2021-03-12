const {sequelize} = require("./config/ConfigSql")


const StudentRepository = {};

StudentRepository.authenticate = async() =>{

    sequelize.authenticate()
    .then(() => {
      console.log('Conectado')
    })
    .catch(err => {
      console.log('No se conecto')
    })
}
    
StudentRepository.getAllStudent = async() =>{

    const [results, metadata] = await sequelize.query("SELECT * FROM Student")
    console.log(results)
}

module.exports = StudentRepository;

