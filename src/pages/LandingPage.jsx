import React from 'react';
import HeroSection from '../components/HeroSection';
import TypewriterText from '../components/TypewriterText';
import CTAButton from '../components/CTAButton';
import heroImage from '../assets/hero.jpg';

export default function LandingPage() {
    return (
        <section id ="landing-page">
        <HeroSection backgroundImage={heroImage}>
            <TypewriterText
                text="Hi, I'm Andreas Georgatos"
                speed={100}
                startDelay={500}
            />

            <CTAButton to="#contact">
                Get In Touch
            </CTAButton>
        </HeroSection>
        </section>
    );
}