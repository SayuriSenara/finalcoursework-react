import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

test("renders search page heading", () => {
  render(
    <BrowserRouter>
      <SearchPage favourites={[]} setFavourites={() => {}} />
    </BrowserRouter>
  );

  const heading = screen.getByText(/search properties/i);
  expect(heading).toBeInTheDocument();
});
