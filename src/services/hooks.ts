import { useEffect, useState } from "react";
import {SCREEN_SM} from "./constants";

export const useCheckScreenWidth = (): boolean => {
    const [isScreenLarge, setIsScreenLarge] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenWidth = (): void => {
            const screenWidth = window.innerWidth;
            setIsScreenLarge(screenWidth > SCREEN_SM);
        };

        checkScreenWidth();

        window.addEventListener("resize", checkScreenWidth);

        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

    return isScreenLarge;
};
