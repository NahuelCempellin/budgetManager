const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('income', {
    Concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1
    },
   
  },{
    timestamps: false
  });
};