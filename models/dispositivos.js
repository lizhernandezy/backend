module.exports = (Sequelize, type) => {
    return Sequelize.define('dispositivo',{
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        iddisp: type.STRING,
        topico: type.STRING,
        data: type.STRING,
        timestamp: type.DATE

    });
}