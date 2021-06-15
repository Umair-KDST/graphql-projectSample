import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "./../queries";
import { BookDetails } from "./BookDetails";
import { BookListWrapper, SearchBooks } from "./../styles/BookList.styled";

export const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  const [selected, setSelected] = useState(null);

  if (loading) return <p data-testid="book-list-loading">Loading...</p>;
  if (error) return <p data-testid="book-list-error">Error Loading Data</p>;

  const bookListItems =
    data &&
    data?.books?.map(({ id, name }, index) => {
      return (
        <li
          data-testid={`book${index}`}
          key={id}
          onClick={() => setSelected(id)}
        >
          {name}
        </li>
      );
    });

  return (
    <div>
      <SearchBooks to="/search">Search</SearchBooks>
      <BookListWrapper data-testid="book-list-success" id="book-list">
        {bookListItems}
      </BookListWrapper>
      <BookDetails bookId={selected} />
    </div>
  );
};
