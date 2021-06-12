import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "./../queries";
import { BookDetails } from "./BookDetails";
import { BookListWrapper } from "./../styles/BookList.styled";

export const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  const [selected, setSelected] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Data</p>;

  const { books } = data;

  const bookListItems = books.map(({ id, name }) => {
    return (
      <li key={id} onClick={() => setSelected(id)}>
        {name}
      </li>
    );
  });

  return (
    <div>
      <BookListWrapper id="book-list">{bookListItems}</BookListWrapper>
      <BookDetails bookId={selected} />
    </div>
  );
};
