import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";
import { BrowserRouter } from "react-router-dom";

const mockProperty = {
  id: 1,
  shortDescription: "Test Property",
  price: 250000,
  bedrooms: 2,
  postcode: "NW1",
  images: ["/test.jpg"],
};

test("renders property details correctly", () => {
  render(
    <BrowserRouter>
      <PropertyCard
        property={mockProperty}
        favourites={[]}
        setFavourites={jest.fn()}
      />
    </BrowserRouter>
  );

  expect(screen.getByText(/test property/i)).toBeInTheDocument();
  expect(screen.getByText(/£250000/i)).toBeInTheDocument();
  expect(screen.getByText(/2 bedrooms/i)).toBeInTheDocument();
});
