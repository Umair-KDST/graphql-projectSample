import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { BOOKS_SEARCH_QUERY } from "./../queries";
import { BookDetails } from "./BookDetails";
import { BookListWrapper, SearchBooks } from "./../styles/BookList.styled";
import { SearchButton, SearchInput } from "./../styles/SearchBar.styled";

export const SearchBar = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [selected, setSelected] = useState(null);
  const [executeSearch, { data }] = useLazyQuery(BOOKS_SEARCH_QUERY);

  const bookListItems =
    data &&
    data?.filterBooks?.map(({ id, name }, index) => {
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
      <div>
        Search:{" "}
        <SearchInput
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />{" "}
        <SearchButton
          onClick={() =>
            executeSearch({
              variables: { name: searchFilter },
            })
          }
        >
          OK
        </SearchButton>
      </div>
      <BookListWrapper data-testid="book-list-success" id="book-list">
        {bookListItems}
      </BookListWrapper>
      <BookDetails bookId={selected} />
      {data?.filterBooks.length === 0 && <p>No Book Found</p>}
      <SearchBooks to="/">Back</SearchBooks>
    </div>
  );
};
