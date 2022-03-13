module.exports = (sequelize, DataTypes) => {
    const Nomes = sequelize.define("nomes", {
        nomes: 
        {type:DataTypes.JSON}
    })
    
    return Nomes;
}
