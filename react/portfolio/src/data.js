
export const personalInfo = {
    name: "Your Name",
    title: "Full Stack Developer",
    designation: "Software Developer",
    experience: "1+ Years",
    email: "your.email@gmail.com",
    phone: "+91 XXXXXXXXXX",
    location: "Pune, Maharashtra, India",

    shortDescription:
        "I am a Full Stack Developer specializing in MERN Stack, Python, Java, DevOps, Cloud Computing and Generative AI.",

    about:
        "Passionate Software Developer and Technical Trainer with 1+ years of experience in training students and developing web applications. Experienced in building scalable full-stack applications, REST APIs, database management, cloud deployment and AI-powered solutions. I enjoy sharing knowledge, solving real-world problems and helping aspiring developers build successful careers.",

    // profileImage: "/images/profile.png",
    // resume: "/files/resume.pdf",

    socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        // portfolio: "https://yourportfolio.com"
    },
    technologies :["HTML5","CSS3","Python","SQL","REACT","NODEJS","JAVA", "C#", "JAVASCRIPT"]
};


// ========================================
// PROJECTS LIST
// ========================================

export const projectsList = [
    {
        id: 1,
        title: "Learning Management System",
        category: "MERN Stack",
        shortDescription:
            "A role-based LMS platform for managing courses, instructors, students and online learning.",
        image: "/images/lms.png",
        technologies: ["React", "Node.js", "Express.js", "MongoDB"],
        liveLink: "",
        githubLink: "",
        featured: true
    },
    {
        id: 2,
        title: "World Population Dashboard",
        category: "Full Stack Development",
        shortDescription:
            "An interactive dashboard displaying country-wise population statistics and analytics.",
        image: "/images/world-dashboard.png",
        technologies: ["React", "Node.js", "Express.js", "MySQL", "Recharts"],
        liveLink: "",
        githubLink: "",
        featured: true
    },
    {
        id: 3,
        title: "Online Code Judge",
        category: "Full Stack Development",
        shortDescription:
            "An online coding platform where users can write, execute and test programming solutions.",
        image: "/images/code-judge.png",
        technologies: ["React", "Node.js", "Python", "Docker"],
        liveLink: "",
        githubLink: "",
        featured: true
    },
    {
        id: 4,
        title: "Task Management System",
        category: "Full Stack Development",
        shortDescription:
            "A task management application for organizing projects, assigning tasks and tracking progress.",
        image: "/images/task-management.png",
        technologies: ["React", "Node.js", "Express.js", "MySQL", "Sequelize"],
        liveLink: "",
        githubLink: "",
        featured: false
    },
    {
        id: 5,
        title: "Weather Application",
        category: "Frontend Development",
        shortDescription:
            "A weather application that displays real-time weather information using an external API.",
        image: "/images/weather-app.png",
        technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
        liveLink: "",
        githubLink: "",
        featured: false
    },
    {
        id: 6,
        title: "Recipe Finder",
        category: "Frontend Development",
        shortDescription:
            "A recipe discovery application with search, filtering, sorting and recipe details.",
        image: "/images/recipe-app.png",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"],
        liveLink: "",
        githubLink: "",
        featured: false
    }
];


// ========================================
// PROJECT DETAILS
// ========================================

export const projectsDetails = [
    {
        projectId: 1,
        title: "Learning Management System",
        overview:
            "A complete learning management platform designed to manage online courses and educational activities.",

        features: [
            "Role-based authentication (Admin, Instructor, Student)",
            "Student and instructor management",
            "Course and category management",
            "Course enrollment system",
            "Lecture and quiz management",
            "Student learning progress tracking",
            "JWT authentication and protected routes"
        ],

        challenges:
            "Implementing role-based authorization, course enrollment workflows and tracking student learning progress.",

        role: "Full Stack Developer",

        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Bootstrap",
            "JWT",
            "Cloudinary"
        ],

        githubLink: "",
        liveLink: ""
    },
    {
        projectId: 2,
        title: "World Population Dashboard",
        overview:
            "A data-driven dashboard that provides insights into world population statistics using a MySQL database.",

        features: [
            "Total world population",
            "Top 10 populated countries",
            "Least populated countries",
            "Continent-wise population analysis",
            "Country count statistics",
            "Interactive charts and graphs"
        ],

        challenges:
            "Writing optimized SQL queries and presenting large datasets through interactive visualizations.",

        role: "Full Stack Developer",

        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "Sequelize",
            "Recharts",
            "Axios"
        ],

        githubLink: "",
        liveLink: ""
    },
    {
        projectId: 3,
        title: "Online Code Judge",
        overview:
            "An online coding environment that allows users to write and execute programs in multiple programming languages.",

        features: [
            "Online code editor",
            "Monaco Editor integration",
            "Code execution",
            "Python and JavaScript support",
            "Execution output",
            "Docker-based execution environment"
        ],

        challenges:
            "Creating an isolated code execution environment and managing secure execution workflows.",

        role: "Full Stack Developer",

        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "Python",
            "JavaScript",
            "Docker",
            "Monaco Editor"
        ],

        githubLink: "",
        liveLink: ""
    }
];


// ========================================
// TECHNICAL SKILLS
// ========================================

export const skills = [
    {
        id: 1,
        category: "Frontend Development",
        icon: "Monitor",
        skills: [
            { name: "HTML5", level: "Advanced" },
            { name: "CSS3", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "React.js", level: "Advanced" },
            { name: "Next.js", level: "Intermediate" },
            { name: "Bootstrap", level: "Advanced" },
            { name: "Redux Toolkit", level: "Intermediate" }
        ]
    },
    {
        id: 2,
        category: "Backend Development",
        icon: "Server",
        skills: [
            { name: "Node.js", level: "Advanced" },
            { name: "Express.js", level: "Advanced" },
            { name: "REST APIs", level: "Advanced" },
            { name: "Python", level: "Advanced" },
            { name: "Django", level: "Intermediate" },
            { name: "Java", level: "Intermediate" },
            { name: "Spring Boot", level: "Intermediate" },
            { name: "JWT Authentication", level: "Advanced" }
        ]
    },
    {
        id: 3,
        category: "Database",
        icon: "Database",
        skills: [
            { name: "MongoDB", level: "Advanced" },
            { name: "MySQL", level: "Advanced" },
            { name: "SQL", level: "Advanced" },
            { name: "Sequelize ORM", level: "Intermediate" },
            { name: "Mongoose", level: "Advanced" }
        ]
    },
    {
        id: 4,
        category: "DevOps & Cloud",
        icon: "Cloud",
        skills: [
            { name: "Git", level: "Advanced" },
            { name: "GitHub", level: "Advanced" },
            { name: "Docker", level: "Intermediate" },
            { name: "Kubernetes", level: "Beginner" },
            { name: "AWS", level: "Intermediate" },
            { name: "Linux", level: "Intermediate" },
            { name: "CI/CD", level: "Beginner" }
        ]
    },
    {
        id: 5,
        category: "Generative AI",
        icon: "Brain",
        skills: [
            { name: "Generative AI", level: "Intermediate" },
            { name: "Prompt Engineering", level: "Intermediate" },
            { name: "OpenAI API", level: "Intermediate" },
            { name: "AI Chatbots", level: "Intermediate" },
            { name: "LLMs", level: "Intermediate" },
            { name: "RAG", level: "Beginner" },
            { name: "Embeddings", level: "Beginner" }
        ]
    },
    {
        id: 6,
        category: "Tools & Others",
        icon: "Wrench",
        skills: [
            { name: "VS Code", level: "Advanced" },
            { name: "Postman", level: "Advanced" },
            { name: "IntelliJ IDEA", level: "Intermediate" },
            { name: "npm", level: "Advanced" },
            { name: "REST API Testing", level: "Advanced" }
        ]
    }
];


// ========================================
// CERTIFICATIONS
// ========================================

export const certificates = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        issueDate: "",
        credentialId: "",
        certificateImage: "/images/certificates/aws.png",
        credentialUrl: ""
    },
    {
        id: 2,
        title: "Docker Certification",
        organization: "Docker",
        issueDate: "",
        credentialId: "",
        certificateImage: "/images/certificates/docker.png",
        credentialUrl: ""
    },
    {
        id: 3,
        title: "Python Certification",
        organization: "Certification Provider",
        issueDate: "",
        credentialId: "",
        certificateImage: "/images/certificates/python.png",
        credentialUrl: ""
    }
];
