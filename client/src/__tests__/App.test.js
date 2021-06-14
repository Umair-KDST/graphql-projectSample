import { screen } from "@testing-library/react";
import { renderWithSimpleApollo } from "./../utils/helpers/test";
import "@testing-library/jest-dom/extend-expect";
import App from "./../App";

it("Render The App Component", () => {
  renderWithSimpleApollo(<App />);
  const linkElement = screen.getByText(/Sample Reading List/i);
  expect(linkElement).toBeInTheDocument();
});
