// components/HeroSection.jsx
import React from 'react';
import styles from '../styles/landingpage.module.css';

const HeroSection = ({
                         backgroundImage,
                         children,
                         overlayGradient = 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                     }) => {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`
    };

    const overlayStyle = {
        background: overlayGradient
    };

    return (
        <section className={styles.container} style={containerStyle}>
            <div className={styles.overlay} style={overlayStyle}></div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
};

export default HeroSection;