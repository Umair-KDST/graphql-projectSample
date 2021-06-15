import React from "react";
import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";
import { AppWrapper } from "./styles/App.styled";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <h1>Sample Reading List</h1>
        <Switch>
          <Route path="/search" component={SearchBar} />
          <Route path="/" component={BookList} />
        </Switch>
        <AddBook />
      </Router>
    </AppWrapper>
  );
};

export default App;
