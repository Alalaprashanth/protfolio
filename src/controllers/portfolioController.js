const {
  Profile,
  Skill,
  Experience,
  Project,
  Education,
  ContactMessage
} = require('../models');

const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

const getSkills = async (req, res, next) => {
  try {
    const skills = await Skill.findAll();
    res.json(skills);
  } catch (error) {
    next(error);
  }
};

const getExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findAll({ order: [['createdAt', 'DESC']] });
    res.json(experience);
  } catch (error) {
    next(error);
  }
};

const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.findAll({ order: [['isEnterprise', 'DESC'], ['createdAt', 'DESC']] });
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

const getEducation = async (req, res, next) => {
  try {
    const education = await Education.findAll();
    res.json(education);
  } catch (error) {
    next(error);
  }
};

const postContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = await ContactMessage.create({ name, email, subject, message });
    res.status(201).json({ message: 'Message sent successfully', id: newMessage.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  getSkills,
  getExperience,
  getProjects,
  getEducation,
  postContact
};
