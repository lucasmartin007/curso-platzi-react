import React from "react";

import { GlobalStyle } from "../styles/GlobalStyles";

import { Logo } from "../components/Logo";

import { ListOfCategories } from "../components/ListOfCategories";

import { ListOfPhotoCards } from "../container/ListOfPhotoCards";


export const Home = ({ id }) => {
    return(
        <div>
            <GlobalStyle />
            <Logo />
            
            <ListOfCategories />

            <ListOfPhotoCards categoryId={id} />
        </div>
    )
}