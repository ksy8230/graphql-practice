import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Movie from '../components/Movie';

const GET_MOVIES = gql`
{
    movies {
        id
    }
}
`;

export default () => {
    const {loading, error, data} = useQuery(GET_MOVIES);
    console.log(loading, error, data)
    if(loading) {
        return 'loading...';
    } 
    if (data && data.movies) {
        return data.movies.map(m => <Movie key={m.id} id={m.id} />)
    }
}
