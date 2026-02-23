const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  overview: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  techStack: {
    type: DataTypes.JSON, // Array of strings
    allowNull: false
  },
  contributions: {
    type: DataTypes.JSON, // Array of strings
    allowNull: false
  },
  achievements: {
    type: DataTypes.JSON, // Array of strings
    allowNull: false
  },
  isEnterprise: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Project;
