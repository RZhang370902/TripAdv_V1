module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    arrival_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
/*
  Trip.associate = (models) => {
    Trip.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
*/
  return Trip;
}