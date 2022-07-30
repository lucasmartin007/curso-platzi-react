import React, { Fragment } from "react";
import { Layout } from "../components/Layout";
import { FavsWithQuery } from "../container/GetFavourites";

export default () => {
    return(
        <Fragment>
            <Layout title = "Petgram - Tus favoritos" subtitle = "Aca puedes encontrar tus favoritos" />
            <FavsWithQuery />
        </Fragment>
    )
}
