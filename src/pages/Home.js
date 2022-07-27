import React from "react";

import { ListOfCategories } from "../components/ListOfCategories";

import { ListOfPhotoCards } from "../container/ListOfPhotoCards";


export const Home = ({ categoryId }) => {
    return(
        <div>
            
            <ListOfCategories />

            { categoryId ? (<ListOfPhotoCards category_id = { categoryId } />) : (<ListOfPhotoCards category_id = { 2 } />) }
        </div>
    )
}