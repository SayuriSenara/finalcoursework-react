import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/main.css";

function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <Router>
      <Header />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/search"
            element={
              <SearchPage
                favourites={favourites}
                setFavourites={setFavourites}
              />
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

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
