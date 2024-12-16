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
      <section className="service-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            We offer a wide range of services to help your business succeed.
            Explore our expertise below!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Modern and scalable web solutions to meet your business
                requirements.
              </p>
              <Link href="/contact">
                <button className="btn-secondary">Learn More</button>
              </Link>
            </div>
            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>
                Creating user-centered designs for web and mobile applications.
              </p>
              <Link href="/contact">
                <button className="btn-secondary">Learn More</button>
              </Link>
            </div>
            <div className="service-card">
              <h3>Digital Marketing</h3>
              <p>
                Boost your online presence and maximize your customer
                engagement.
              </p>
              <Link href="/contact">
                <button className="btn-secondary">Learn More</button>
              </Link>
              <br></br>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Let us help bring your ideas to life with our comprehensive services.
          </p>
          <Link href="/contact">
            <button className="btn-primary">Contact Us Today</button>
          </Link>
        </div>
        
      </section>
    </main>
  );
};

export default page;
