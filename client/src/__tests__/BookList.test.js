import { screen, act, cleanup, fireEvent } from "@testing-library/react";
import {
  renderWithApollo,
  renderWithSimpleApollo,
} from "./../utils/helpers/test";
import "@testing-library/jest-dom/extend-expect";
import { BookList } from "./../components/BookList";
import { mockBooksDataSuccess, mockBooksDataError } from "./../utils/constants";

afterEach(cleanup);

it("Renders The Loading UI", () => {
  renderWithSimpleApollo(<BookList />);
  expect(screen.getByTestId("book-list-loading")).toHaveTextContent(
    "Loading..."
  );
});

it("Renders The BookList Component", async () => {
  await act(async () => renderWithApollo(<BookList />, mockBooksDataSuccess));
  await act(async (resolve) => setTimeout(resolve, 0));
  expect(screen.getByTestId("book-list-success")).toBeInTheDocument();
});

it("Selects The Individual Book Information", async () => {
  await act(async () => renderWithApollo(<BookList />, mockBooksDataSuccess));
  await act(async (resolve) => setTimeout(resolve, 0));
  fireEvent.click(screen.getByTestId("book0"));
});

it("Renders The Error UI", async () => {
  await act(async () => renderWithApollo(<BookList />, mockBooksDataError));
  expect(screen.getByTestId("book-list-error")).toHaveTextContent(
    "Error Loading Data"
  );
});
