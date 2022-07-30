import React, { useContext, Suspense } from 'react';

import { Redirect, Router } from "@reach/router";

import { GlobalStyle } from "./styles/GlobalStyles";

import { Logo } from "./components/Logo";

// import { Category } from "./components/Category";
import { ListOfCategories } from "./components/ListOfCategories";
// import { PhotoCard } from './components/PhotoCard';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
// import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NavBar } from "./components/NavBar";
import { Context } from './Context';
import { NotFound } from './pages/NotFound';

const Favs = React.lazy(() => import("./pages/Favs"));

const UserLogged = ({ children }) => {
    return children({ isAuth:false })
}

export const App = () => {
    const { isAuth } = useContext(Context);
    return(
        <Suspense fallback = { <div /> }>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path = "/" />
                <Home path = "/pet/:categoryId" />
                <Detail path = "/detail/:detailId" />
                { !isAuth && <NotRegisteredUser path = "/login" /> }
                { !isAuth && <Redirect noThrow from = "/favs" to = "/login" /> }
                { !isAuth && <Redirect noThrow from = "/user" to = "/login" /> }
                { isAuth && <Redirect noThrow from = "/login" to = "/" /> }
                <Favs path = "/favs" />
                <User path = "/user" />
            </Router>
            <NavBar />
        </Suspense>
    )
}
