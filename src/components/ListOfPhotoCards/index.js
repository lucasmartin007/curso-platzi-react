import React from "react";

// import { graphql } from "react-apollo";
// import { gql } from "apollo-boost";
import { useQuery } from '@apollo/client';

import { PhotoCard } from "../PhotoCard";

import { GET_PHOTOS } from "../../hoc/withPhotos";


export const ListOfPhotoCardsComponent = (json_categoryid) => {
    const categoryId = json_categoryid.json_id.categoryId;

    const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })

    if (error) {
        console.log(error);
      return <h2>Internal Server Error.</h2>;
    }
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <ul>
        {data.photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </ul>
    );
  };

// const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
//     return (
//     <ul>{
//         photos.map(photo => <PhotoCard key = { photo.id } { ...photo } />)
//     }
//     </ul>
//     )
// }


