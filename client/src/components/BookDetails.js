import React, { Fragment } from "react";
import { GET_BOOK_QUERY } from "../queries";
import { useQuery } from "@apollo/client";
import { BookDetailsWrapper } from "./../styles/BookDetails.styled";

export const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
    skip: !bookId,
    variables: { id: bookId },
  });

  let content;

  if (loading) content = <p data-testid="book-details-loading">Loading...</p>;
  else if (error)
    content = <p data-testid="book-details-error">Error Loading Data</p>;
  else if (!bookId)
    content = <p data-testid="book-details-none">No Book Selected...</p>;
  else {
    const {
      book: { name, genre, author },
    } = data;

    const books = author.books.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
    content = (
      <Fragment>
        <h2>{name}</h2>
        <p>Genre: {genre}</p>
        <p>Author: {author.name}</p>
        <p>All Boooks By This Author</p>
        <ul>{books}</ul>
      </Fragment>
    );
  }

  return (
    <BookDetailsWrapper data-testid="book-details-success">
      {content}
    </BookDetailsWrapper>
  );
};
