import React, {useEffect, useState} from 'react';
import {useTypewriter} from '../hooks/useTypewriter';
import styles from '../styles/landingpage.module.css';

const TypewriterText = ({
                            text,
                            speed = 100,
                            startDelay = 0,
                            showCursor = true,
                            vanishDelay = 500,
                            className = '',
                            as = 'h1'
                        }) => {
    const {displayText, isComplete} = useTypewriter(text, speed, startDelay);
    const [cursorVisible, setCursorVisible] = useState(showCursor);

    useEffect(() => {
        setCursorVisible(showCursor);
    }, [showCursor]);

    useEffect(() => {
        if (isComplete && showCursor) {
            const timer = setTimeout(() => {
                setCursorVisible(false);
            }, vanishDelay);
            return () => clearTimeout(timer);
        }
    }, [isComplete, vanishDelay, showCursor]);

    const Component = as;

    return (
        <Component className={`${styles.heading} ${className}`}>
            {displayText}
            {cursorVisible && <span className={styles.cursor}>|</span>}
        </Component>
    );
};

export default TypewriterText;
