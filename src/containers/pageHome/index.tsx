import {useNavigate} from "react-router-dom";
import {ROUTER} from "services/constants";
import {Button} from "components";
import {logo} from "assets/images";

import './style.scss';


export const PageHomeContainer = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate(ROUTER.ABOUT);
    };

    return (
        <div className="home-page">
            <figure className="home-page__logo">
                <img src={logo} alt="logo" />
                <figcaption hidden>logo company</figcaption>
            </figure>
            <section className="home-page__block">
                <h1 className="home-page__title">QRATES</h1>
                <p className="home-page__description">
                    Music in your hands
                </p>
                <Button
                    className="home-page__button"
                    onClick={handleButtonClick}
                    aria-label="button start navigate to url about"
                >
                    START
                </Button>
            </section>
        </div>
    )
}
