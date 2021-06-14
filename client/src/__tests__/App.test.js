import { screen, cleanup } from "@testing-library/react";
import { renderWithSimpleApollo } from "./../utils/helpers/test";
import "@testing-library/jest-dom/extend-expect";
import App from "./../App";

afterEach(cleanup);

it("Render The App Component", () => {
  renderWithSimpleApollo(<App />);
  const linkElement = screen.getByText(/Sample Reading List/i);
  expect(linkElement).toBeInTheDocument();
});
