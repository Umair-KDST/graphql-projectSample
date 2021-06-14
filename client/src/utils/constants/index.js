import { GET_BOOKS_QUERY, ADD_BOOK_MUTATION } from "./../../queries/index";

export const mockBooksDataSuccess = {
  request: {
    query: GET_BOOKS_QUERY,
  },
  result: {
    data: {
      books: [
        {
          name: "The Long Earth",
          id: "60c30d2944f3a103e0ff6ff1",
        },
        {
          name: "The Colour of Magic",
          id: "60c30d8744f3a103e0ff6ff2",
        },
      ],
    },
  },
};

export const mockBooksDataError = {
  request: {
    query: GET_BOOKS_QUERY,
  },
  error: new Error("Error Loading Data"),
};

export const mockAddBook = {
  request: {
    query: ADD_BOOK_MUTATION,
    variables: {
      variables: {
        name: "XYZ",
        genre: "Fantasy",
        authorId: "60c38b7c49c77c0d54ac2cb7",
      },
    },
  },
  result: {
    data: {
      addBook: {
        name: "XYZ",
        id: "60c7470c25961e45646e3d1b",
      },
    },
  },
};
