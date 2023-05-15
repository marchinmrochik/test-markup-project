import React from 'react';
import {
    Routes, Route
} from "react-router-dom";
import {ROUTER} from "./services/constants";
import { PageLayout } from './containers';
import {ErrorPage, HomePage, CatalogPage, AboutPage} from './pages';

function App() {
    return (
        <Routes>
            <Route path={ROUTER.HOME} element={<PageLayout/>}>
                <Route path={ROUTER.HOME} element={<HomePage/>}/>
                <Route path={ROUTER.ABOUT} element={<AboutPage/>}/>
                <Route path={ROUTER.CATALOG} element={<CatalogPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
