import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div>
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

      {/* Contact Us Section */}
      <section className="contact-us">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you! Reach out to us for any queries or concerns.</p>

          {/* Contact Form */}
          <form action="/submit-form" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your Email" />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="Your Message"></textarea>
            </div>
            <br></br>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Our Office</h3>
            <p>123 Business St, Suite 456, City, Country</p>
            <p><strong>Email:</strong> info@marcstra.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
