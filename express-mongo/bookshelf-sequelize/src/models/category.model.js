module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      name: {
        type: DataTypes.STRING,
        noEmpty: true,
      },
    },
    {
      tableName: 'categories',
      timestamps: true,
    }
  );

  return Category;
};
