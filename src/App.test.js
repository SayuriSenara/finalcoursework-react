import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page content", () => {
  render(<App />);

  // Check hero button text instead of heading role
  const button = screen.getByText(/search properties/i);
  expect(button).toBeInTheDocument();

  // Check app name anywhere on screen (navbar)
  const appName = screen.getByText(/PropertyFinder/i);
  expect(appName).toBeInTheDocument();
});
