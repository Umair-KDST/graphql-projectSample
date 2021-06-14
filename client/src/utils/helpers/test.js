import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

export const renderWithApollo = (component, mockData) => {
  return {
    ...render(
      <MockedProvider addTypename={false} mocks={[mockData]}>
        {component}
      </MockedProvider>
    ),
  };
};

export const renderWithSimpleApollo = (component) => {
  return {
    ...render(<MockedProvider>{component}</MockedProvider>),
  };
};
