import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/profile.jpg'; // Make sure to add your profile image
import '../styles/aboutme.css';

export default function AboutMe() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) observer.observe(imageRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about-me" className="about-section" ref={sectionRef}>
            <div className="about-container">
                <div className="about-wrapper">
                    {/* Profile Picture - Left Side */}
                    <div className="about-image-container" ref={imageRef}>
                        <div className="image-wrapper">
                            <img
                                src={profileImage}
                                alt="Andreas Georgatos"
                                className="profile-image"
                            />
                            <div className="image-border"></div>
                            <div className="image-glow"></div>
                        </div>

                        {/* Decorative elements */}
                        <div className="floating-particle particle-1"></div>
                        <div className="floating-particle particle-2"></div>
                        <div className="floating-particle particle-3"></div>
                    </div>

                    {/* About Content - Right Side */}
                    <div className="about-content" ref={contentRef}>
                        <h2 className="about-title">
                            <span className="title-gradient">About Me</span>
                            <div className="title-underline"></div>
                        </h2>

                        <div className="about-text">
                            <p className="intro-text">
                                Hello! I'm <span className="highlight">Andreas Georgatos</span>,
                                a passionate developer with a love for creating elegant,
                                user-centric digital experiences.
                            </p>

                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-label">Experience</span>
                                    <span className="info-value">5+ Years</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Focus</span>
                                    <span className="info-value">Full-Stack Development</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Passion</span>
                                    <span className="info-value">Programming</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Hobbies</span>
                                    <span className="info-value">Nature</span>
                                </div>
                            </div>

                            <p className="description">
                                I'm a dedicated Software Engineer with a passion for building efficient, scalable, and user-friendly applications.
                                I enjoy solving complex problems through thoughtful design and development.
                            </p>
                            <div className="skills-section">
                                <h3 className="skills-title">Core Skills</h3>
                                <div className="skills-grid">
                                    <span className="skill-tag">Java</span>
                                    <span className="skill-tag">Docker</span>
                                    <span className="skill-tag">Game Development</span>
                                    <span className="skill-tag">Web Development</span>
                                    <span className="skill-tag">Wordpress</span>
                                    <span className="skill-tag">Sys Admin</span>
                                    <span className="skill-tag">C</span>
                                    <span className="skill-tag">C++</span>
                                    <span className="skill-tag">Python</span>
                                </div>
                            </div>

                            <div className="cta-group">
                                <a href="#cv" className="about-cta primary">
                                    View My CV
                                </a>
                                <a href="#contact" className="about-cta secondary">
                                    Let's Connect
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}