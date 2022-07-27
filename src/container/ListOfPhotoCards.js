import React from "react";

import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards";

export const ListOfPhotoCards = (category_id) => {
    let json_categoryid = category_id.category_id;
    return(
        <>
            <ListOfPhotoCardsComponent json_categoryid = { json_categoryid } />
        </>
    );
}
