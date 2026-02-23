const {
  sequelize,
  Profile,
  Skill,
  Experience,
  Project,
  Education
} = require('../models');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced for seeding.');

    // Profile
    await Profile.create({
      name: 'Prashanth Alala',
      role: 'Full Stack Developer',
      experience: '3.6+ Years',
      summary: 'Full Stack Developer with 3.6+ years of experience in building scalable web applications using Node.js, Express.js, React.js, and PostgreSQL. Strong expertise in designing secure REST and GraphQL APIs, implementing JWT based authentication, and developing enterprise-grade systems. Experienced in microservices architecture, cloud deployment, and performance optimization. Proven ability to collaborate with cross functional teams to deliver high-quality solutions.',
      github: 'https://github.com/prashanth-alala',
      linkedin: 'https://linkedin.com/in/prashanthalala11',
      email: 'prashanthalala1805@gmail.com'
    });

    // Skills
    const skills = [
      { category: 'Programming Languages', name: 'JavaScript (ES6+)' },
      { category: 'Programming Languages', name: 'TypeScript' },
      { category: 'Backend Technologies', name: 'Node.js' },
      { category: 'Backend Technologies', name: 'Express.js' },
      { category: 'Frontend Technologies', name: 'React.js' },
      { category: 'Frontend Technologies', name: 'Tailwind CSS' },
      { category: 'Frontend Technologies', name: 'Framer Motion' },
      { category: 'Databases', name: 'PostgreSQL' },
      { category: 'Databases', name: 'Redis' },
      { category: 'Databases', name: 'MongoDB' },
      { category: 'API Architecture', name: 'REST API' },
      { category: 'API Architecture', name: 'Microservices' },
      { category: 'API Architecture', name: 'JWT' },
      { category: 'API Architecture', name: 'RBAC' },
      { category: 'DevOps & Tools', name: 'Docker' },
      { category: 'DevOps & Tools', name: 'Git' },
      { category: 'DevOps & Tools', name: 'AWS (EC2, S3)' },
      { category: 'DevOps & Tools', name: 'CI/CD' },
      { category: 'Testing Tools', name: 'Jest' },
      { category: 'Testing Tools', name: 'Supertest' }
    ];
    await Skill.bulkCreate(skills);

    // Experience
    await Experience.create({
      title: 'Sr. Software Engineer',
      company: 'August Devices India Pvt Ltd',
      location: 'Hyderabad, India',
      duration: 'Nov 2024 – Present',
      responsibilities: [
        'Engineered scalable backend services for a multi-module enterprise platform using Node.js and PostgreSQL.',
        'Designed normalized data models for products, suppliers, customers, and warehouses.',
        'Developed secure RESTful APIs for Distributor, Technician, and Inventory management dashboards.',
        'Integrated JWT-based authentication with RBAC to enforce role-specific security.',
        'Improved API performance by ~25% using query optimization and Redis caching.'
      ]
    });
    await Experience.create({
      title: 'Software Engineer',
      company: 'Ratna Global Technologies',
      location: 'Hyderabad, India',
      duration: 'Apr 2022 – Oct 2024',
      responsibilities: [
        'Designed and implemented optimized database schemas for VGive crowdfunding and Service Desktop platforms.',
        'Developed RESTful APIs for fundraising, donations, volunteer management, and reporting modules.',
        'Implemented core modules for Service Desktop including Session, JWT Token, and Workflow engines.',
        'Integrated third-party APIs for currency conversion and secure payment processing.',
        'Improved code reliability by authoring internal designs and implementing unit tests using Jest.'
      ]
    });

    // Projects
    await Project.create({
      title: 'Survlens',
      overview: 'Modular enterprise platform designed to unify service distribution, technician operations, inventory management, and customer engagement. Features role-based dashboards and real-time system integration.',
      techStack: ['Node.js', 'Sequelize ORM', 'PostgreSQL', 'Redis'],
      contributions: [
        'Engineered scalable backend services using Node.js, Sequelize ORM, and PostgreSQL.',
        'Designed and implemented normalized data models for products, suppliers, customers, warehouses, and support workflows.',
        'Developed secure, reusable RESTful APIs for Service Distributor, Technician, Inventory, and Customer Portal modules.',
        'Managed complex inter-model associations and maintained shared entities like Users, Roles, and Documents.',
        'Integrated JWT-based authentication with RBAC to enforce role-specific access.',
        'Improved API performance by ~25% using query optimization and Redis caching.'
      ],
      achievements: [
        'Improved API performance by ~25% through query optimization.',
        'Reduced production issues by implementing reusable components and automated testing.',
        'Successfully unified multiple disparate modules into a single enterprise platform.'
      ],
      isEnterprise: true
    });
    await Project.create({
      title: 'VGive',
      overview: 'Online crowdfunding platform for social, charity, medical, health, and environmental causes. Supports fundraisers, donors, volunteers, and comprehensive reporting.',
      techStack: ['MySQL', 'Node.js', 'Sequelize', 'Express'],
      contributions: [
        'Designed and implemented optimized database schemas and tables using MySQL and Sequelize.',
        'Developed and maintained RESTful APIs for fundraising, donations, volunteer management, and reporting modules.',
        'Integrated third-party APIs for secure and accurate currency conversion.',
        'Identified root causes of defects and resolved production and performance issues.',
        'Coordinated with QA and frontend teams to ensure smooth feature delivery.'
      ],
      achievements: [
        'Optimized core database schemas for high-frequency donation transactions.',
        'Successfully integrated multi-currency support via third-party APIs.',
        'Improved system stability by resolving legacy production defects.'
      ],
      isEnterprise: true
    });
    await Project.create({
      title: 'Service Desktop',
      overview: 'Web-based workflow system embedded within Communicator and Service Desktop, providing a teammate experience to select and execute workflows for identifying member answers.',
      techStack: ['Node.js', 'React', 'PostgreSQL', 'Jest'],
      contributions: [
        'Implemented REST APIs for Session, JWT Token, Layout, Workflow, and Question modules.',
        'Authored internal design and specification documents.',
        'Identified root causes and resolved production issues.',
        'Wrote comprehensive unit test cases using Jest.',
        'Created test data for workflow validation across multiple scenarios.'
      ],
      achievements: [
        'Successfully delivered core modules for session and workflow management.',
        'Improved code quality and reliability through automated Jest tests.',
        'Reduced manual validation time by creating automated test data scenarios.'
      ],
      isEnterprise: true
    });

    // Education
    await Education.create({
      degree: 'Bachelor of Commerce (B.Com)',
      institution: 'Acharya Nagarjuna University'
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
