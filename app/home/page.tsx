import Link from "next/link";


export default function Home() {
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
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Your Partner in Success</h1>
            <p>
              We specialize in delivering cutting-edge solutions to drive
              business growth. Explore our expertise and discover how we can
              transform your vision into reality.
            </p>
            <Link href="/services">
              <button className="btn-primary">Discover Our Services</button>
            </Link>
          </div>
          {/* <Image
            src="/hero-image.jpg"
            alt="Hero"
            width={600}
            height={400}
            className="hero-image"
          /> */}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Expertise</h2>
          <div className="services-grid">
            <div className="service">
              {/* <Image src="/service1.png" alt="Web Development" width={80} height={80} /> */}
              <h3>Web Development</h3>
              <p>Building scalable and modern web applications tailored to your needs.</p>
            </div>
            <div className="service">
              {/* <Image src="/service2.png" alt="UI/UX Design" width={80} height={80} /> */}
              <h3>UI/UX Design</h3>
              <p>
                Crafting seamless and intuitive user experiences for web and
                mobile platforms.
              </p>
            </div>
            <div className="service">
              {/* <Image src="/service3.png" alt="Digital Marketing" width={80} height={80} /> */}
              <h3>Digital Marketing</h3>
              <p>Enhancing your online presence to maximize reach and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <div className="container">
          <h2>Our Work</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              {/* <Image src="/portfolio1.jpg" alt="Project 1" width={400} height={300} /> */}
              <h4>E-commerce Platform</h4>
              <p>
                A robust online store solution with custom features and
                integrations.
              </p>
            </div>
            <div className="portfolio-item">
              {/* <Image src="/portfolio2.jpg" alt="Project 2" width={400} height={300} /> */}
              <h4>Corporate Website</h4>
              <p>
                A professional website showcasing the brand’s expertise and
                services.
              </p>
            </div>
            <div className="portfolio-item">
              {/* <Image src="/portfolio3.jpg" alt="Project 3" width={400} height={300} /> */}
              <h4>Mobile Application</h4>
              <p>
                A sleek and user-friendly app tailored to client requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                "The team’s commitment to quality and innovation exceeded our
                expectations. Highly recommend!"
              </p>
              <h5>– Emma Johnson, CEO</h5>
            </div>
            <div className="testimonial">
              <p>
                "Their expertise helped us launch our platform on time with
                incredible results."
              </p>
              <h5>– Mark Anderson, Product Manager</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Elevate Your Business?</h2>
          <p>
            Let’s collaborate and create something extraordinary. Contact us
            today to get started.
          </p>
          <Link href="/contact">
            <button className="btn-primary">Get in Touch</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p>&copy; 2024 My Professional Brand. All Rights Reserved.</p>
          <nav className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
