import React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>> & {
                'slides-per-view'?: string;
                navigation?: boolean;
                pagination?: boolean;
            };
            'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                lazy?: string;
            };
        }
    }
}
