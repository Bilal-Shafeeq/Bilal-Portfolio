import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const ConfettiAnimation = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [confettiActive, setConfettiActive] = useState(true);

    const detectSize = () => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        const confettiTimeout = setTimeout(() => {
            setConfettiActive(false);
        }, 8000);

        window.addEventListener('resize', detectSize);

        return () => {
            clearTimeout(confettiTimeout);
            window.removeEventListener('resize', detectSize);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2, 
        }}>
            {confettiActive && (
                <ReactConfetti
                    width={windowDimensions.width}
                    height={windowDimensions.height}
                />
            )}
        </div>
    );
};
export default ConfettiAnimation





