import React from 'react';
import styles from '../styles/landingpage.module.css';

export default function CTAButton({
                                      to,
                                      children,
                                      variant = 'primary',
                                      className = '',
                                      external = false,
                                      ...props
                                  }) {
    const variantClass = styles[variant] || '';
    const buttonClass = `${styles.button} ${variantClass} ${className}`.trim();

    if (external) {
        return (
            <a
                href={to}
                className={buttonClass}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <a href={to} className={buttonClass} {...props}>
            {children}
        </a>
    );
}
