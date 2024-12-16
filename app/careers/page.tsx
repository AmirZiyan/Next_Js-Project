import React from "react";
import Link from "next/link"; // Ensure this is imported for navigation

const Careers = () => {
  return (
    <div className="careers">
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
          <h1>Careers at Our Company</h1>
          <p>
            Join a dynamic and innovative team that’s redefining success. We
            value talent, dedication, and creativity.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join">
        <div className="container">
          <h2>Why Work With Us?</h2>
          <div className="reasons">
            <div className="reason">
              <h3>Innovative Culture</h3>
              <p>
                Be part of a team that thrives on innovation, collaboration, and
                forward-thinking solutions.
              </p>
            </div>
            <div className="reason">
              <h3>Growth Opportunities</h3>
              <p>
                We invest in your professional development and provide pathways
                for growth.
              </p>
            </div>
            <div className="reason">
              <h3>Work-Life Balance</h3>
              <p>
                Enjoy a supportive environment that values your well-being and
                work-life harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="open-positions">
        <div className="container">
          <h2>Open Positions</h2>
          <div className="positions">
            <div className="position">
              <h3>Software Engineer</h3>
              <p>
                Build and maintain cutting-edge software solutions in a
                collaborative environment.
              </p>
              <button className="btn-primary">Apply Now</button>
            </div>
            <div className="position">
              <h3>UI/UX Designer</h3>
              <p>
                Design user-friendly interfaces and create intuitive digital
                experiences.
              </p>
              <button className="btn-primary">Apply Now</button>
            </div>
            <div className="position">
              <h3>Marketing Specialist</h3>
              <p>
                Drive brand awareness and execute impactful marketing
                campaigns.
              </p>
              <button className="btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Our Company Section */}
      <section className="life-at-company">
        <div className="container">
          <h2>Life at Our Company</h2>
          <p>
            Experience a workplace that prioritizes collaboration, inclusivity,
            and fun. Here’s what makes us unique:
          </p>
          <ul>
            <li>Team-building events and activities</li>
            <li>Opportunities to work on impactful projects</li>
            <li>A diverse and inclusive culture</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Join Our Team?</h2>
          <p>
            Take the next step in your career and work with a team that’s
            redefining success. We can’t wait to meet you!
          </p>
          <button className="btn-primary">View All Openings</button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
