import React from "react";

import { Helmet } from "react-helmet";

import { Layout } from "../components/Layout";

import { ListOfCategories } from "../components/ListOfCategories";

import { ListOfPhotoCards } from "../container/ListOfPhotoCards";


const HomePage = ({ categoryId }) => {
    return(
        <div>
            <Helmet>
                <title>Petgram - App de fotos de mascotas</title>
                <meta name = "description" content = "Con Petgram puedes encontrar fotos de animales domesticos" />
            </Helmet>
            <ListOfCategories />

            { categoryId ? (<ListOfPhotoCards category_id = { categoryId } />) : (<ListOfPhotoCards />) }
        </div>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
})
