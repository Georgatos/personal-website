import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('landing-page');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (href) => {
        setIsMobileMenuOpen(false);
        setActiveSection(href.substring(1)); // Remove the # from href

        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const createRippleEffect = (e) => {
        const button = e.currentTarget;
        const rippleContainer = button.querySelector('.navbar__ripple-container');

        if (rippleContainer) {
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            const ripple = document.createElement('div');
            ripple.className = 'navbar__ripple';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            rippleContainer.appendChild(ripple);

            setTimeout(() => {
                rippleContainer.removeChild(ripple);
            }, 600);
        }
    };

    const navItems = [
        { href: '#landing-page', label: 'Home' },
        { href: '#about-me', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#cv', label: 'CV' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <>
            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .navbar--scrolled {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(30px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                }

                .navbar__container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    position: relative;
                }

                .navbar__logo {
                    position: relative;
                    text-decoration: none;
                    z-index: 10;
                    transition: transform 0.3s ease;
                }

                .navbar__logo:hover {
                    transform: scale(1.05);
                }

                .navbar__logo-text {
                    font-size: 1.75rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
                    background-size: 200% 200%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: gradientShift 3s ease infinite;
                    display: block;
                    position: relative;
                }

                .navbar--scrolled .navbar__logo-text {
                    background: linear-gradient(135deg, #4f46e5, #9333ea, #db2777);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .navbar__logo-underline {
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #6366f1, #a855f7);
                    border-radius: 2px;
                    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .navbar__logo:hover .navbar__logo-underline {
                    width: 100%;
                }

                .navbar__menu {
                    display: flex;
                    list-style: none;
                    gap: 0.5rem;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    transition: all 0.3s ease;
                }

                .navbar__item {
                    position: relative;
                }

                .navbar__link {
                    position: relative;
                    display: block;
                    padding: 0.75rem 1.5rem;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.95rem;
                    letter-spacing: 0.025em;
                    border-radius: 50px;
                    overflow: hidden;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    color: rgba(255, 255, 255, 0.9);
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                    z-index: 1;
                    cursor: pointer;
                }

                .navbar--scrolled .navbar__link {
                    color: #374151;
                    text-shadow: none;
                }

                .navbar__link-text {
                    position: relative;
                    z-index: 3;
                    transition: transform 0.3s ease;
                }

                .navbar__link-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
                    border-radius: 50px;
                    opacity: 0;
                    transform: scale(0.8);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1;
                }

                .navbar--scrolled .navbar__link-background {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
                }

                .navbar__link-underline {
                    position: absolute;
                    bottom: 8px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #6366f1, #a855f7);
                    border-radius: 1px;
                    transform: translateX(-50%);
                    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 2;
                }

                .navbar__ripple-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    border-radius: 50px;
                    z-index: 0;
                }

                .navbar__ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: rippleEffect 0.6s ease-out;
                    pointer-events: none;
                }

                .navbar__link:hover {
                    transform: translateY(-2px);
                }

                .navbar__link:hover .navbar__link-background {
                    opacity: 1;
                    transform: scale(1);
                }

                .navbar__link:hover .navbar__link-underline {
                    width: 70%;
                }

                .navbar__link:hover .navbar__link-text {
                    transform: scale(1.05);
                }

                .navbar--scrolled .navbar__link:hover {
                    color: #6366f1;
                    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
                }

                .navbar__link--active {
                    color: #a855f7 !important;
                    font-weight: 600;
                }

                .navbar--scrolled .navbar__link--active {
                    color: #6366f1 !important;
                }

                .navbar__link--active .navbar__link-background {
                    opacity: 1;
                    transform: scale(1);
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15));
                }

                .navbar__link--active .navbar__link-underline {
                    width: 80%;
                    background: linear-gradient(90deg, #6366f1, #a855f7);
                }

                .navbar__mobile-toggle {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                    padding: 0.5rem;
                    gap: 4px;
                    z-index: 1001;
                    transition: all 0.3s ease;
                }

                .navbar__mobile-toggle span {
                    width: 25px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 2px;
                    transition: all 0.3s ease;
                    transform-origin: center;
                }

                .navbar--scrolled .navbar__mobile-toggle span {
                    background: #374151;
                }

                .navbar__mobile-toggle.active span:nth-child(1) {
                    transform: rotate(45deg) translateY(7px);
                }

                .navbar__mobile-toggle.active span:nth-child(2) {
                    opacity: 0;
                }

                .navbar__mobile-toggle.active span:nth-child(3) {
                    transform: rotate(-45deg) translateY(-7px);
                }

                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes rippleEffect {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(4);
                        opacity: 0;
                    }
                }

                /* Mobile Styles */
                @media (max-width: 768px) {
                    .navbar__container {
                        padding: 1rem 1.5rem;
                    }

                    .navbar__menu {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100vh;
                        background: rgba(255, 255, 255, 0.98);
                        backdrop-filter: blur(20px);
                        flex-direction: column;
                        justify-content: center;
                        gap: 2rem;
                        transform: translateX(-100%);
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .navbar__menu.mobile-open {
                        transform: translateX(0);
                        opacity: 1;
                        visibility: visible;
                    }

                    .navbar__mobile-toggle {
                        display: flex;
                    }

                    .navbar__logo-text {
                        font-size: 1.5rem;
                    }

                    .navbar__link {
                        color: #374151;
                        text-shadow: none;
                        font-size: 1.2rem;
                        padding: 1rem 2rem;
                    }

                    .navbar__link:hover {
                        color: #6366f1;
                    }
                }

                @media (max-width: 480px) {
                    .navbar__container {
                        padding: 0.75rem 1rem;
                    }

                    .navbar__logo-text {
                        font-size: 1.25rem;
                    }
                }

                /* Accessibility */
                .navbar__link:focus {
                    outline: 2px solid #6366f1;
                    outline-offset: 2px;
                }

                @media (prefers-reduced-motion: reduce) {
                    .navbar,
                    .navbar__link,
                    .navbar__logo,
                    .navbar__menu {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>

            <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__container">
                    <a href="#landing-page" className="navbar__logo" onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#landing-page');
                    }}>
                        <span className="navbar__logo-text">
                            Andreas
                            <div className="navbar__logo-underline"></div>
                        </span>
                    </a>

                    <ul className={`navbar__menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.href} className="navbar__item">
                                <a
                                    href={item.href}
                                    className={`navbar__link ${activeSection === item.href.substring(1) ? 'navbar__link--active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item.href);
                                        createRippleEffect(e);
                                    }}
                                >
                                    <span className="navbar__link-text">{item.label}</span>
                                    <div className="navbar__link-background"></div>
                                    <div className="navbar__link-underline"></div>
                                    <div className="navbar__ripple-container"></div>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div
                        className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        role="button"
                        aria-label="Toggle mobile menu"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleMobileMenu();
                            }
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;