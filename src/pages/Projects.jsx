import React, { useEffect, useRef } from 'react';
import '../styles/projects.css';

export default function Projects() {
    const projectsGridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const projects = entry.target.querySelectorAll('.project-card');
                        projects.forEach((project, index) => {
                            setTimeout(() => {
                                project.classList.add('visible');
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (projectsGridRef.current) {
            observer.observe(projectsGridRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            id: 1,
            title: "Point of Service/Sale System Back-End",
            category: "Full-Stack Development",
            description: "A comprehensive online point of sale/service system.",
            technologies: ["Java", "Spring Boot", "Kotlin", "Javascript", "NodeJS"],
            status: "In Development",
            icon: "💳"
        },
        {
            id: 2,
            title: "Naive Bayes Classifier",
            category: "Terminal",
            description: "A naive Bayes classifier, made for educational purposes",
            technologies: ["Java"],
            status: "Completed",
            icon: "🧠"
        },
        {
            id: 3,
            title: "Discord Bot",
            category: "Automation",
            description: "A discord bot that automates administration tasks",
            technologies: ["Java", "DiscordJDA"],
            status: "Completed",
            icon: "🤖"
        },
        {
            id: 4,
            title: "Various Minecraft Plugins",
            category: "Entertainment",
            description: "Wraps, customized range of chatting, AFK detection systems",
            technologies: ["Java", "SpigotMC", "PaperMC", "Minecraft"],
            status: "Completed",
            icon: "⛏️"
        },
        {
            id: 5,
            title: "2D Platformer Game",
            category: "Unity3D",
            description: "A 2D platformer game made with Unity3D",
            technologies: ["Unity3D", "C#"],
            status: "In Development",
            icon: "🎮"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
            case 'Released':
                return 'status-completed';
            case 'In Development':
            case 'Beta Testing':
                return 'status-development';
            case 'Prototype':
                return 'status-prototype';
            default:
                return 'status-default';
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title">
                        <span className="title-gradient">My Projects</span>
                        <div className="title-underline"></div>
                    </h2>
                    <p className="projects-subtitle">
                        A collection of innovative solutions I've crafted across various domains,
                        from web applications to mobile apps and games
                    </p>
                </div>

                <div className="projects-stats">
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">8</span>
                        <span className="stat-label">Technologies Mastered</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">3+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                </div>

                <div className="projects-grid" ref={projectsGridRef}>
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <div className="project-icon">
                                    <span className="icon-emoji">{project.icon}</span>
                                </div>
                                <div className="project-meta">
                                    <span className="project-category">{project.category}</span>
                                    <span className={`project-status ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-footer">
                                <button className="project-cta">
                                    <span>Learn More</span>
                                    <svg className="cta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                    </svg>
                                </button>
                            </div>

                            {/* Decorative elements */}
                            <div className="card-glow"></div>
                            <div className="card-border"></div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <h3 className="cta-title">Interested in Working Together?</h3>
                    <p className="cta-description">
                        I'm always open to discussing new opportunities and exciting projects.
                        Let's create something amazing together!
                    </p>
                    <a href="#contact" className="cta-button">
                        <span>Start a Conversation</span>
                        <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Background decorations */}
            <div className="bg-decoration decoration-1"></div>
            <div className="bg-decoration decoration-2"></div>
            <div className="bg-decoration decoration-3"></div>
        </section>
    );
}