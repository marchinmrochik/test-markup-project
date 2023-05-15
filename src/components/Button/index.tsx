import React, { ReactNode, ButtonHTMLAttributes } from 'react';

import './style.scss';

interface ButtonProps<T = HTMLButtonElement> extends ButtonHTMLAttributes<T> {
    className?: string;
    children?: ReactNode;
}

export const Button = <T extends HTMLButtonElement>({ className, children, ...props }: ButtonProps<T>) => {
    return (
        <button className={`button ${className}`} {...props}>
            {children}
        </button>
    );
};
