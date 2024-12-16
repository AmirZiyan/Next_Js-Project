import React from "react";
import Link from "next/link"; // Ensure this is imported for navigation

const AboutUs = () => {
  return (
    <div className="about-us">
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
      <section className="hero">
        <div className="container">
          <h1>About Us</h1>
          <p>
            We are a dedicated team passionate about delivering innovative
            solutions to empower businesses and create meaningful impact.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be a global leader in delivering innovative, reliable, and
              user-focused solutions.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with cutting-edge technology and create
              exceptional experiences for our clients and their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h4>John Doe</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <h4>Jane Smith</h4>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <h4>Emily Johnson</h4>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Want to Work With Us?</h2>
          <p>
            Join our journey to create impactful solutions that redefine
            industries. Contact us today to learn more.
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
