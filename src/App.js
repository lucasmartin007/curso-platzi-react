import React from 'react';

import { Router } from "@reach/router";

// import { Category } from "./components/Category";
import { ListOfCategories } from "./components/ListOfCategories";
// import { PhotoCard } from './components/PhotoCard';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

import { Home } from './pages/Home';

export const App = () => {
const urlParams = new window.URLSearchParams(window.location.search);
const detailId = urlParams.get("detail");
return(
    detailId ? <PhotoCardWithQuery id = { detailId } /> :
    <Router>
        <Home path = "/" />
        <Home path = "/pet/:id" />
    </Router>
) }
