import React, { Fragment } from "react";

import { GlobalStyle } from "../styles/GlobalStyles";

import { Logo } from "../components/Logo";

import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { NavBar } from "../components/NavBar";

export const Detail = ({ detailId }) => {
    return(
        <Fragment>
            <PhotoCardWithQuery id = { detailId } />
        </Fragment>
    )
}
