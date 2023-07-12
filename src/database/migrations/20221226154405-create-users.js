module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(256),
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(256),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      about: {
        type: Sequelize.STRING(1024),
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
