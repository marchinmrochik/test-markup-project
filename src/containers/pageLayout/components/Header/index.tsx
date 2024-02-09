import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Navigation} from "../Navigation";
import {Button, ImageContainer} from "components";
import {ROUTER} from "services/constants";
import {useCheckScreenWidth} from "services/hooks";
import {logo} from "assets/images";

import './style.scss';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLargeScreen = useCheckScreenWidth();

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const isShowNavigate = location.pathname === ROUTER.HOME;

    const closeNavigation = () => {
        document.body.style.overflow = 'auto';
        setMobileNavOpen(false);
    }

     useEffect(() => {
         if(isLargeScreen) {
             closeNavigation()
         }
     }, [isLargeScreen])

    useEffect(() => {
        closeNavigation()
    }, [location.pathname])

    const handleMobileNavToggle = () => {
        if(!isMobileNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        setMobileNavOpen(!isMobileNavOpen);
    };

    const handleLogo = () => {
        navigate(ROUTER.HOME)
    }

    return (
        <header className="header">
            <ImageContainer
                className="header__logo"
                onClick={handleLogo}
                imageUrl={logo}
                title="logo"
                figcaption="logo company"
            />

            {!isShowNavigate ? (
                <Button className="header__hamburger-button" aria-label="open navigation panel"
                     onClick={handleMobileNavToggle}>
                    <span className="header__hamburger-icon" aria-hidden="true">
                        <span className="header__hamburger-icon-line"/>
                        <span className="header__hamburger-icon-line"/>
                        <span className="header__hamburger-icon-line"/>
                    </span>
                </Button>
            ) : null}

            {isMobileNavOpen && !isShowNavigate ? (
                <div className="header__container-navigation">
                    <Navigation handleLogo={handleLogo} handleMobileNavToggle={handleMobileNavToggle}/>
                </div>
            ) : null}
        </header>
    )
}
