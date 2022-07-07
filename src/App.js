import React from 'react';

// import { Category } from "./components/Category";
import { ListOfCategories } from "./components/ListOfCategories";

import { GlobalStyle } from './GlobalStyles';

export const App = () => (
    <div>
        <GlobalStyle />
        <ListOfCategories />
    </div>
)
