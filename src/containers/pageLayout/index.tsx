import {Outlet, useLocation} from "react-router-dom";
import {Header} from "./components/Header";
import {Navigation} from "./components/Navigation";
import {ROUTER} from "services/constants";

import './styles.scss';

export const PageLayout = () => {
    const location = useLocation();
    const isShowNavigate = location.pathname === ROUTER.ABOUT ||  location.pathname === ROUTER.CATALOG;

    return (
        <>
            <Header/>
            <main className={`page-layout__content ${isShowNavigate && 'page-layout__content--flex'}`}>
                {
                    isShowNavigate ? (
                        <aside className="page-layout__aside">
                            <Navigation/>
                        </aside>
                    ) : null
                }
                <Outlet/>
            </main>
        </>
    )
}
