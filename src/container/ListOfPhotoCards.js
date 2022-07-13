import React from "react";

import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards";

export const ListOfPhotoCards = (json_categoryid) => {
    console.log(json_categoryid);
    return(
        <>
            <ListOfPhotoCardsComponent json_id = { json_categoryid } />
        </>
    );
}
