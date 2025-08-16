import React, { useEffect, useRef } from 'react';
import '../styles/cv.css';

export default function CV() {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll('.timeline-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="cv" className="cv-section">
            <div className="cv-container">
                <div className="cv-header">
                    <h2 className="cv-title">
                        <span className="title-gradient">Professional Journey</span>
                        <div className="title-underline"></div>
                    </h2>
                    <p className="cv-subtitle">
                        A passionate developer with diverse experience in full-stack development,
                        continuous learning, and real-world problem solving
                    </p>
                </div>

                <div className="timeline-container" ref={timelineRef}>
                    <div className="timeline-line"></div>

                    {/* Current Focus */}
                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <div className="timeline-badge current">
                                <span className="badge-icon">🚀</span>
                            </div>
                            <h3 className="timeline-title">Current Focus</h3>
                            <span className="timeline-date">2025 - Present</span>
                            <div className="timeline-description">
                                <p>
                                    <strong>Full-Stack Developer & Freelancer</strong><br/>
                                    Building scalable, efficient, applications <br />
                                    and creating 2D games.
                                </p>
                                <ul className="timeline-achievements">
                                    <li>Developing scalable React applications</li>
                                    <li>Creating REST APIs with Java and Node.js</li>
                                    <li>Create games with Unity3D</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Professional Development */}
                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <div className="timeline-badge">
                                <span className="badge-icon">💼</span>
                            </div>
                            <h3 className="timeline-title">Professional Development</h3>
                            <span className="timeline-date">2020 - 2024</span>
                            <div className="timeline-description">
                                <p>
                                    <strong>Self-Employed Developer & Continuous Learner</strong><br/>
                                    Focused on building real-world projects and expanding technical expertise
                                </p>
                                <ul className="timeline-achievements">
                                    <li>Completed 15+ client projects</li>
                                    <li>Learned Kotlin and android development</li>
                                    <li>Built a portfolio of production applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Military Service */}
                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <div className="timeline-badge military">
                                <span className="badge-icon">🛡️</span>
                            </div>
                            <h3 className="timeline-title">Military Service</h3>
                            <span className="timeline-date">2018 - 2019</span>
                            <div className="timeline-description">
                                <p>
                                    <strong>Mandatory Military Training</strong><br/>
                                    Hellenic Armed Forces
                                </p>
                                <ul className="timeline-achievements">
                                    <li>Developed leadership and teamwork skills</li>
                                    <li>Managed technical equipment and systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Early Career & Education */}
                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <div className="timeline-badge education">
                                <span className="badge-icon">🎓</span>
                            </div>
                            <h3 className="timeline-title">Foundation Years</h3>
                            <span className="timeline-date">2016 - now</span>
                            <div className="timeline-description">
                                <p>
                                    <strong>Computer Science Studies & Early Projects</strong><br/>
                                    Vocational High School, University Studies & Self-Directed Learning
                                </p>
                                <ul className="timeline-achievements">
                                    <li>Studied core CS fundamentals</li>
                                    <li>Built first web applications</li>
                                    <li>Participated in coding competitions</li>
                                    <li>Started freelance development work</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Summary */}
                <div className="skills-summary">
                    <h3 className="skills-summary-title">Technical Expertise</h3>
                    <div className="skills-categories">
                        <div className="skill-category">
                            <h4 className="category-title">Frontend</h4>
                            <div className="skill-items">
                                <span className="skill-item">React.js</span>
                                <span className="skill-item">Bootstrap</span>
                                <span className="skill-item">Next.js</span>
                                <span className="skill-item">Tailwind CSS</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4 className="category-title">Backend</h4>
                            <div className="skill-items">
                                <span className="skill-item">Node.js</span>
                                <span className="skill-item">Express</span>
                                <span className="skill-item">Python</span>
                                <span className="skill-item">Java</span>
                                <span className="skill-item">Spring boot</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4 className="category-title">Tools & Cloud</h4>
                            <div className="skill-items">
                                <span className="skill-item">Docker</span>
                                <span className="skill-item">Git</span>
                                <span className="skill-item">Github</span>
                                <span className="skill-item">Jenkins</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*/!* Download CV Button *!/*/}
                {/*<div className="cv-download">*/}
                {/*    <button className="download-btn">*/}
                {/*        <svg className="download-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">*/}
                {/*            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>*/}
                {/*            <polyline points="7 10 12 15 17 10"></polyline>*/}
                {/*            <line x1="12" y1="15" x2="12" y2="3"></line>*/}
                {/*        </svg>*/}
                {/*        Download Full CV*/}
                {/*    </button>*/}
                {/*    <p className="download-note">*/}
                {/*        Get a detailed PDF version with project portfolio and references*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}