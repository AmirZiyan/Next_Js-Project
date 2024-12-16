import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <main>
      {/* Navbar */}
      <header className="navbar">
        <div className="container navbar-container">
          <div className="logo">
            {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
            <h1>Marcstra</h1>
          </div>
          <nav className="nav-links">
            <Link href="/home">Home</Link>
            <Link href="/aboutus">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/support">Support</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="support-hero">
        <div className="container">
          <h1>Support</h1>
          <p>We are here to help you with any questions or concerns you may have.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How can I contact support?</h3>
            <p>You can reach us via email, phone, or the support form below.</p>
          </div>
          <div className="faq-item">
            <h3>What is the response time for support?</h3>
            <p>Our team aims to respond to all inquiries within 24-48 hours.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer technical support?</h3>
            <p>Yes, we provide technical support for all our services and products.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-info">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +1-234-567-890</p>
          <p>Address: 123 Support Street, Help City, HC 56789</p>
        </div>
      </section>

      {/* Support Form */}
      <section className="support-form">
        <div className="container">
          <h2>Submit a Support Request</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5} // Corrected: Use number here, not a string
                placeholder="How can we help?"
                required
              ></textarea>
              <br></br>
            </div>
            <button type="submit" className="btn-primary">
              Submit
            </button>
            <br></br>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/aboutus">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p>&copy; 2024 Marcstra. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default page;
