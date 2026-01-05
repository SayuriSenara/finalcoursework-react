import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container">
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Contact Us</h1>
        <p>
          Get in touch with PropertyFinder — we’re happy to help you find your
          perfect home.
        </p>
      </section>

      {/* INFO + FORM */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        {/* CONTACT INFO */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3>Get in Touch</h3>
          <p>Email: info@propertyfinder.co.uk</p>
          <p>Phone: +44 123 456 789</p>
          <p>Address: London, United Kingdom</p>

          <h3 style={{ marginTop: "20px" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* OUR LOCATION */}
        <div style={{ flex: 1, minWidth: "350px" }}>
          <h3>Our Location</h3>

          <div
            style={{
              marginTop: "10px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            }}
          >
            <iframe
              title="PropertyFinder Location"
              src="https://www.google.com/maps?q=London,United%20Kingdom&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div style={{ marginTop: "50px auto", maxWidth: "700px" }}>
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
