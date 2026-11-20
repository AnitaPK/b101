
import React from "react";
import {
    FiMonitor,
    FiServer,
    FiDatabase,
    FiCloud,
    FiTool,
    FiCpu,
    FiCode
} from "react-icons/fi";

const Skills = ({ skills = [] }) => {

    const categoryIcons = {
        Monitor: <FiMonitor />,
        Server: <FiServer />,
        Database: <FiDatabase />,
        Cloud: <FiCloud />,
        Brain: <FiCpu />,
        Wrench: <FiTool />
    };

    const getLevelClass = (level) => {
        switch (level) {
            case "Advanced":
                return "level-advanced";
            case "Intermediate":
                return "level-intermediate";
            case "Beginner":
                return "level-beginner";
            default:
                return "level-default";
        }
    };

    return (
        <section className="skills-section py-5" id="skills"  style={{height:"85vh"}}>
            <div className="container">

                {/* Section Heading */}
                <div className="text-center mb-5">
                    <span className="section-subtitle">
                        WHAT I KNOW
                    </span>

                    <h2 className="section-title mt-2">
                        My Skills & <span>Expertise</span>
                    </h2>

                    <p className="section-description mx-auto">
                        Technologies and tools I use to build scalable,
                        responsive and modern applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="row g-4">

                    {skills.map((category) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={category.id}
                        >
                            <div className="skill-card h-100">

                                {/* Category Header */}
                                <div className="d-flex align-items-center gap-3 mb-4">

                                    <div className="skill-category-icon">
                                        {categoryIcons[category.icon] || <FiCode />}
                                    </div>

                                    <h5 className="skill-category-title mb-0">
                                        {category.category}
                                    </h5>

                                </div>

                                {/* Individual Skills */}
                                <div className="d-flex flex-wrap gap-2">

                                    {category.skills.map((skill, index) => (
                                        <div
                                            className="skill-item"
                                            key={`${category.id}-${skill.name}-${index}`}
                                        >
                                            <span className="skill-name">
                                                {skill.name}
                                            </span>

                                            <span
                                                className={`skill-level ${getLevelClass(skill.level)}`}
                                            >
                                                {skill.level}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;
