import React, { useContext, Fragment } from "react";

import { Context } from "../Context";

import { SubmitButton } from "../components/SubmitButton";
import { Layout } from "../components/Layout";

export const User = () => {
    const { removeAuth } = useContext(Context);
    return(
        <Fragment>
            <Layout title = "Petgram - Cuenta" />
            <SubmitButton onClick = { removeAuth }>Cerrar sesion</SubmitButton>
        </Fragment>
    )
}
