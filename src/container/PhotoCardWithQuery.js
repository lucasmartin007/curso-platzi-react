import React from 'react';

import { gql, useQuery } from '@apollo/client';

import { Query } from '@apollo/client/react/components';

import { PhotoCard } from '../components/PhotoCard';

const GET_SINGLE_PHOTO = gql`
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

const renderProp = ({ loading, error, data }) => {
  // const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
  //   variables: {
  //     id: id
  //   }
  // })
  if (error) {
    console.log(error);
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return(
      <PhotoCard { ...data.photo } />
  )
}

export const PhotoCardWithQuery = ( { id } ) => {
  // console.log(id);
  return(
    <Query query = { GET_SINGLE_PHOTO } variables = { { id } }>
      { renderProp }
    </Query>
  )
}
