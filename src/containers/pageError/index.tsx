import {Timer} from './components';
import {DELAY_REDIRECT, ROUTER} from "services/constants";

import './style.scss';

export const PageErrorContainer = () => {
    return (
        <div className="error-page">
            <h2 className="error-page__title">404: Page Not Found</h2>
            <Timer duration={DELAY_REDIRECT} redirectUrl={ROUTER.HOME} />
            <p className="error-page__description">
                Click on the logo in the header or you will be automatically redirected not to the home page
            </p>
        </div>
    );
}
