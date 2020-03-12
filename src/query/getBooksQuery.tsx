import gql from 'graphql-tag';

/**
 * Query string for getting the list of books.
 */
export const GET_BOOKS_QUERY = gql`
    query getBooks {books{
        id
        name
        longName
        author
        publisher {name}
        narrator {name}
        description
        releaseYear
        fullLength
    }
    }
`;