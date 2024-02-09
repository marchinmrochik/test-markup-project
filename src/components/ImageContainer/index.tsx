import React from 'react';

interface ImageContainerProps {
    imageUrl: string;
    title?: string;
    className?: string;
    hiddenFigcaption?: boolean;
    onClick?: () => void;
    figcaption?: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl, title, className, hiddenFigcaption = true, onClick, figcaption }) => {
    return (
        <figure className={`${className}`} onClick={onClick}>
            <img src={imageUrl} alt={title} title={title} />
            <figcaption hidden={hiddenFigcaption}>{figcaption}</figcaption>
        </figure>
    );
};
