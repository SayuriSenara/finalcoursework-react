import { render, screen } from "@testing-library/react";
import SearchPage from "../pages/SearchPage";
import { BrowserRouter } from "react-router-dom";

test("renders Search Properties heading", () => {
  render(
    <BrowserRouter>
      <SearchPage favourites={[]} setFavourites={jest.fn()} />
    </BrowserRouter>
  );

  const heading = screen.getByText(/search properties/i);
  expect(heading).toBeInTheDocument();
});
