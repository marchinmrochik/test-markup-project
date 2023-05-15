import {Slider} from "./components/Slider";

import './styles.scss';

import {
    slide0,
    slide1,
    slide2,
    slide3,
    slide4,
} from "../../assets/images";

const slides = [slide0, slide1, slide2, slide3, slide4]

export const PageAboutContainer = () => {
    return <section className={'page-about-container'}>
        <Slider slides={slides}/>
        <h1 className="page-about-container__title">QRATES</h1>
        <p className="page-about-container__description">
            We're record and cassette lovers, music fans. We believe they serve an important connection between musicians
            and fans. So we built Qrates to help artists bring the magic of music on physical things to more people.
        </p>
    </section>
}
