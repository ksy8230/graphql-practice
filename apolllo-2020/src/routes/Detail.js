import React from 'react';
import { useParams } from 'react-router-dom';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            rating
          }
    }
`;

export default () => {
    let { id } = useParams();
    const {loading, data} = useQuery(GET_MOVIE, {
        variables : {id : parseInt(id)}
    });
    console.log(id, data)
    if (loading){
        return 'loading...'
    }
    if (data && data.movie) {
        return data.movie.title
    }
}