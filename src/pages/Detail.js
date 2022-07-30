import React, { Fragment } from "react";

import { Helmet } from "react-helmet";

import { GlobalStyle } from "../styles/GlobalStyles";

import { Logo } from "../components/Logo";

import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { NavBar } from "../components/NavBar";
import { Layout } from "../components/Layout";

export const Detail = ({ detailId }) => {
    return(
        <Fragment>            
            <Helmet>
                <title>Petgram - { `Fotografia ${ detailId }` } </title>
            </Helmet>
            <PhotoCardWithQuery id = { detailId } />
        </Fragment>
    )
}
