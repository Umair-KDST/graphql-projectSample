import { fireEvent, act, screen, cleanup } from "@testing-library/react";
import { renderWithApollo } from "./../utils/helpers/test";
import "@testing-library/jest-dom/extend-expect";
import { AddBook } from "./../components/AddBook";
import { mockAddBook } from "./../utils/constants";

afterEach(cleanup);

it("Fires The Add Book", async () => {
  await act(async () => renderWithApollo(<AddBook />, mockAddBook));
  await act(async (resolve) => setTimeout(resolve, 0));
  fireEvent.click(screen.getByTestId("addbook-handler"));
});
