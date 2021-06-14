import React, { Fragment, useCallback } from "react";
import { GET_BOOK_QUERY } from "../queries";
import { useQuery } from "@apollo/client";
import { BookDetailsWrapper } from "./../styles/BookDetails.styled";

export const BookDetails = ({ bookId }) => {
  const { loading, data } = useQuery(GET_BOOK_QUERY, {
    skip: !bookId,
    variables: { id: bookId },
  });

  const {
    book: { name, genre, author },
  } = data || { book: {} };

  const books = author?.books?.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  const content = data ? (
    <Fragment>
      <h2 data-testid="book-details-name">{name}</h2>
      <p>Genre: {genre}</p>
      <p>Author: {author.name}</p>
      <p>All Boooks By This Author</p>
      <ul>{books}</ul>
    </Fragment>
  ) : (
    <p data-testid="book-details-none">No Book Selected...</p>
  );

  const contentCB = useCallback(() => {
    return loading ? (
      <p data-testid="book-details-loading">Loading...</p>
    ) : (
      content
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, content, bookId]);

  return (
    <BookDetailsWrapper data-testid="book-details-success">
      {contentCB()}
    </BookDetailsWrapper>
  );
};
