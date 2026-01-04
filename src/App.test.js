import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page content", () => {
  render(<App />);

  const heading = screen.getByRole("heading", {
    name: /estate agent property finder/i,
  });

  expect(heading).toBeInTheDocument();

  const button = screen.getByText(/search properties/i);
  expect(button).toBeInTheDocument();
});
