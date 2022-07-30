import React from 'react';

import { gql, useQuery } from '@apollo/client';

import { Query } from '@apollo/client/react/components';
import { ListOfFavs } from '../components/ListOfFavs';

const GET_FAVS = gql`
    query getFavs{
        favs{
            id
            categoryId
            src
            likes
            userId
        }
    }
`;

const renderProp = ({ loading, error, data }) => {
    if (error) {
        console.log(error);
        return <h2>Internal Server Error</h2>
    }
    if (loading) {
        return <h2>Loading...</h2>
    }
    const { favs } = data

    return <ListOfFavs favs = { favs } />
}

export const FavsWithQuery = () => (
    <Query query = { GET_FAVS } fetchPolicy = "network-only">
        { renderProp }
    </Query>
)
