import React from 'react';

// import { Category } from "./components/Category";
import { ListOfCategories } from "./components/ListOfCategories";
// import { PhotoCard } from './components/PhotoCard';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';
import { Logo } from './components/Logo';

import { GlobalStyle } from './styles/GlobalStyles';

export const App = () => {
const urlParams = new window.URLSearchParams(window.location.search);
const detailId = urlParams.get("detail");
return(
    detailId ? <PhotoCardWithQuery id = { detailId } /> :
    <div>
        <GlobalStyle />
        <Logo />
        
        <ListOfCategories />

        <ListOfPhotoCards categoryId={2} />
    </div>
) }
