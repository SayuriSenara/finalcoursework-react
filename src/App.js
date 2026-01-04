import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
