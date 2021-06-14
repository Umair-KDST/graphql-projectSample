import { screen, act, cleanup } from "@testing-library/react";
import {
  renderWithApollo,
  renderWithSimpleApollo,
} from "./../utils/helpers/test";
import "@testing-library/jest-dom/extend-expect";
import { BookDetails } from "./../components/BookDetails";
import { mockBooksDataSuccess } from "./../utils/constants";

afterEach(cleanup);

it("Renders The No Books UI", () => {
  renderWithSimpleApollo(<BookDetails />);
  expect(screen.getByTestId("book-details-none")).toHaveTextContent(
    "No Book Selected..."
  );
});

it("Renders The BookList Component", async () => {
  await act(async () =>
    renderWithApollo(<BookDetails />, mockBooksDataSuccess)
  );
  await act(async (resolve) => setTimeout(resolve, 0));
  expect(screen.getByTestId("book-details-success")).toBeInTheDocument();
});
