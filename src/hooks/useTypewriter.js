import { useEffect, useState } from 'react';

export const useTypewriter = (text, speed = 100, startDelay = 0) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!text) return;

        setDisplayText('');
        setIsComplete(false);

        const startTimer = setTimeout(() => {
            let index = 0;

            const timer = setInterval(() => {
                setDisplayText(text.slice(0, index + 1));
                index++;

                if (index === text.length) {
                    clearInterval(timer);
                    setIsComplete(true);
                }
            }, speed);

            return () => clearInterval(timer);
        }, startDelay);

        return () => clearTimeout(startTimer);
    }, [text, speed, startDelay]);

    return { displayText, isComplete };
};
