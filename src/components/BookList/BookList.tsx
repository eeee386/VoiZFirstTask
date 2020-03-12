import React, {Fragment, FunctionComponent} from "react";
import {useGetBooks} from "../../query/useGetBooks";
import './BookList.scss';

/**
 * This component handles listing the books
 * shows: book's name, author, full length, publisher, release year, description
 * @constructor
 */
export const BookList: FunctionComponent = () => {
    const {loading, error, books} = useGetBooks();
    return (
        <Fragment>{
            !loading &&
            (!error ?
                <div className={'bookListWrapper'}>{
                    books?.map(book => {return (
                        <div className={'bookListItem'}>
                            <div className={'bookListItemProp bookTitle'}>{book.name}</div>
                            <div className={'bookListItemProp bookAuthor'}>{book.author}</div>
                            {book.fullLength && <div className={'bookListItemProp'}>{book.fullLength}</div>}
                            <div className={'bookListItemProp'}>{`${book.publisher ? book.publisher.name : ''}${book.releaseYear && book.publisher ? ', ': ''}${book.releaseYear ? book.releaseYear : ''}`}</div>
                            <div className={'bookListItemProp'}>{book.description}</div>
                        </div>
                    )})}
                </div> : error)}
        </Fragment>);
};