import React from 'react';

import { Router } from "@reach/router";

import { GlobalStyle } from "./styles/GlobalStyles";

import { Logo } from "./components/Logo";

// import { Category } from "./components/Category";
import { ListOfCategories } from "./components/ListOfCategories";
// import { PhotoCard } from './components/PhotoCard';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NavBar } from "./components/NavBar";
import Context from './Context';

const UserLogged = ({ children }) => {
    return children({ isAuth:false })
}

export const App = () => {
return(
    <>
        <GlobalStyle />
        <Logo />
        <Router>
            <Home path = "/" />
            <Home path = "/pet/:categoryId" />
            <Detail path = "/detail/:detailId" />
        </Router>
        <Context.Consumer>
        {
            ({ isAuth }) => isAuth ? (
                <Router>
                    <Favs path = "/favs" />
                    <User path = "/user" />
                </Router>
            ) : (
                <Router>
                    <NotRegisteredUser path = "/favs" />
                    <NotRegisteredUser path = "/user" />
                </Router>
            )
        }
        </Context.Consumer>
        <NavBar />
    </>
) }
