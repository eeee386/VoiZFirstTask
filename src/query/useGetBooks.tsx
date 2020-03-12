import { ApolloError } from 'apollo-client';
import { useQuery } from '@apollo/react-hooks';
import {GET_BOOKS_QUERY} from "./getBooksQuery";

export type UseGetBooksReturnType = {
    loading: boolean,
    error?: ApolloError,
    books: [BookType] | undefined
}

export type BooksDataType = {
    books: [BookType]
};

export type BookType = {
    id: string,
    name: string,
    longName: string,
    author: string,
    publisher: { name: string },
    narrator: { name: string },
    description: string,
    releaseYear: string
    fullLength: string
}

/**
 * The query for getting the list of books.
 * return UseGetBooksReturnType
 */
export const useGetBooks = (
): UseGetBooksReturnType => {
    const { error, loading, data } = useQuery<BooksDataType>(GET_BOOKS_QUERY);

    return {
        loading,
        error,
        books: data?.books,
    };
};