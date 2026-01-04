import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

test("renders home page heading", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  const heading = screen.getByRole("heading", {
    name: /estate agent property finder/i,
  });

  expect(heading).toBeInTheDocument();
});
