import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

import './styles.scss';

interface TimerProps {
    duration: number;
    redirectUrl: string;
}

export const Timer: React.FC<TimerProps> = ({ duration, redirectUrl }) => {
    const [timeRemaining, setTimeRemaining] = useState(duration);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);

        if (timeRemaining === 0) {
            clearInterval(timer);
            navigate(redirectUrl)
        }

        return () => clearInterval(timer);
    }, [timeRemaining, redirectUrl]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return <p className='timer__text'>{formatTime(timeRemaining)}</p>;
};
