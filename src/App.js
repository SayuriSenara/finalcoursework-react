import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";

import "./styles/main.css";

function App() {
  //GLOBAL FAVOURITES STATE
  const [favourites, setFavourites] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/search"
          element={
            <SearchPage favourites={favourites} setFavourites={setFavourites} />
          }
        />

        <Route
          path="/property/:id"
          element={
            <PropertyPage
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
