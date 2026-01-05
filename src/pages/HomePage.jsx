import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      style={{
        height: "80vh",
        backgroundImage: "url('/assets/images/properties/home-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "50px",
          borderRadius: "12px",
          textAlign: "center",
          color: "#ebf4dd",
          maxWidth: "700px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Property Finder
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Find your perfect home from our carefully selected properties across
          the UK.
        </p>

        <Link to="/search" className="primary-btn">
          Search Properties
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
