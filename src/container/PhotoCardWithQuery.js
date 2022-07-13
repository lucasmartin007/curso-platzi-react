import React from 'react';

import { gql, useQuery } from '@apollo/client';

import { PhotoCard } from '../components/PhotoCard';

const query = gql`
query getSinglePhoto($id:ID!){
    photo(id:$id){
        id
        categoryId
        src
        likes
        userId
        liked
    }
}
`;

export const PhotoCardWithQuery = ( { id } ) => {
    const { loading, error, data } = useQuery(query, {
        variables: {
          id: id
        }
      })
      if (error) {
        return <h2>Internal Server Error</h2>
      }
      if (loading) {
        return <h2>Loading...</h2>
      }

    return(
        <PhotoCard { ...data.photo } />
    )
}
