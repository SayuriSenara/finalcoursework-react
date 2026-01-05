function AboutPage() {
  return (
    <div className="container about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>About PropertyFinder</h1>
        <p>
          A modern property search platform developed as an academic React
          coursework project.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          PropertyFinder is a React-based web application designed to help users
          search, explore, and compare residential properties across the UK. The
          platform demonstrates modern front-end development practices including
          component-based architecture, routing, and state management.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className="about-cards">
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To simplify property discovery by providing a clean, accessible, and
            user-friendly digital experience for property seekers.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To deliver accurate property information with intuitive navigation
            while showcasing best practices in React application development.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2>What We Do</h2>

        <ul className="about-list">
          <li>Search and filter properties by price, type, and location</li>
          <li>View detailed property information with images</li>
          <li>Explore property locations using embedded maps</li>
          <li>Experience a responsive and intuitive user interface</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
