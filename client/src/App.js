import React from "react";
import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";
import { AppWrapper } from "./styles/App.styled";

const App = () => {
  return (
    <AppWrapper>
      <h1>Sample Reading List</h1>
      <BookList />
      <AddBook />
    </AppWrapper>
  );
};

export default App;
