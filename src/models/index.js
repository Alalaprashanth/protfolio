const sequelize = require('../config/database');
const Profile = require('./Profile');
const Skill = require('./Skill');
const Experience = require('./Experience');
const Project = require('./Project');
const Education = require('./Education');
const ContactMessage = require('./ContactMessage');

// Relationships (if any)
// For now, they are independent as per resume data structure.

const models = {
  Profile,
  Skill,
  Experience,
  Project,
  Education,
  ContactMessage
};

module.exports = {
  sequelize,
  ...models
};
