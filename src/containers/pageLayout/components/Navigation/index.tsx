import React from 'react';
import {NavLink} from "react-router-dom";
import {ROUTER} from "services/constants";
import {Button} from "components";
import {logo} from "assets/images";

import './styles.scss';

interface NavigationProps {
    handleLogo?: () => void;
    handleMobileNavToggle?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ handleLogo, handleMobileNavToggle }) => {
    return (
        <nav className="navigation">
            <div className='navigation__header'>
                <figure className="navigation__logo" onClick={handleLogo}>
                    <img src={logo} alt="logo"/>
                    <figcaption hidden>logo company</figcaption>
                </figure>
                <Button className="navigation__close-button" aria-label="Close" onClick={handleMobileNavToggle}>
                    <span className="navigation__line navigation__line-right" />
                    <span className="navigation__line navigation__line-left" />
                </Button>
            </div>
            <div className='navigation__body'>
                <h2 className="navigation__title">Navigation</h2>
                <ul className="navigation__list">
                    <NavLink className={({isActive, isPending}) =>
                        isActive ? "navigation__item navigation__item--active" : "navigation__item"}
                             to={ROUTER.ABOUT}
                    >
                        ABOUT QRATES
                    </NavLink>
                    <NavLink className={({isActive, isPending}) =>
                        isActive ? "navigation__item navigation__item--active" : "navigation__item"}
                             to={ROUTER.CATALOG}
                    >
                        CATALOG
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
