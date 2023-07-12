const Sequelize = require('sequelize');
const config = require('../config/config');

export default new Sequelize(config);
