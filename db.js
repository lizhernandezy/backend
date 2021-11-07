const { Sequelize } = require('sequelize');
const DispositivoModel = require('./models/dispositivos')

const sequelize = new Sequelize('dispositivosdb', 'root', 'hbkallersy', {
    host: 'localhost',
    dialect: 'mysql'
  });

const Dispositivo = DispositivoModel(sequelize,Sequelize);
sequelize.sync({force: false})
    .then(() => {
        console.log('Tablas sincronizadas!')
    })
module.exports={
    Dispositivo
}