import React from 'react';
const styles = {
  backgroundImage: `url(assets/images/footer/footer-cta-bg.jpg)`,
};
const Footer = () => {
  return (
    <footer className="main-footer bgc-gray footer-white rel z-1 mt-80">
      <div className="footer-cta-wrap">
        <div className="container">
          <div className="footer-cta-inner bgs-cover" style={styles}>
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title">Need Any Consultations ?</span>
              <h2>We’re Ready to Growth IT Business</h2>
            </div>
            <a
              href="contact.html"
              className="theme-btn style-three wow fadeInRight delay-0-2s"
            >
              Get Free Quote <i className="fas fa-long-arrow-right"></i>
            </a>
            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-phone"></i>
              <div className="content">
                <span>Hotline</span>
                <br />
                <a href="callto:+000(123)45688">+000 (123) 456 88</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-30">
                <a href="index.html">
                  <img src="assets/images/logos/logo-one.png" alt="Logo" />
                </a>
              </div>
              <p>
                Sed perspiciatis unde omnste natus error voluptatem accusanti
                doloreue audantium totamrem aeriam.
              </p>
              <a href="about.html" className="read-more">
                Learn More Us <i className="fas fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <h4 className="footer-title">Newsletter</h4>
              <p>
                Sed perspiciatis unde omnste natus error voluptatem accusante.
              </p>
              <form action="#">
                <label htmlFor="email">
                  <i className="far fa-envelope"></i>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="support@gmail.com"
                  required
                />
                <button>Sign Up</button>
              </form>
              <h5>Follow Us</h5>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li>
                      <a href="about.html">Company History</a>
                    </li>
                    <li>
                      <a href="about.html">About Company</a>
                    </li>
                    <li>
                      <a href="services.html">Latest Services</a>
                    </li>
                    <li>
                      <a href="project-grid.html">Popular Works</a>
                    </li>
                    <li>
                      <a href="faqs.html">Asked Questions</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog & News</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Services</h4>
                  <ul className="list-style-two">
                    <li>
                      <a href="service-details.html">Product Design</a>
                    </li>
                    <li>
                      <a href="service-details.html">Design & Development</a>
                    </li>
                    <li>
                      <a href="service-details.html">UX/UI Strategy</a>
                    </li>
                    <li>
                      <a href="service-details.html">Search Engine</a>
                    </li>
                    <li>
                      <a href="service-details.html">IT Consulting</a>
                    </li>
                    <li>
                      <a href="service-details.html">Software Development</a>
                    </li>
                    <li>
                      <a href="service-details.html">Business Analysis</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Support</h4>
                  <ul className="list-style-two">
                    <li>
                      <a href="contact.html">Start Here</a>
                    </li>
                    <li>
                      <a href="about.html">Style guide</a>
                    </li>
                    <li>
                      <a href="404.html">404 Not Found</a>
                    </li>
                    <li>
                      <a href="contact.html">Password Protected</a>
                    </li>
                    <li>
                      <a href="contact.html">Licenses</a>
                    </li>
                    <li>
                      <a href="contact.html">Changelog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="footer-bottom-menu mb-10 wow fadeInRight delay-0-2s">
                <ul></ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="copyright-text text-lg-end wow fadeInLeft delay-0-2s">
                <p>© 2023 CodeBotsLab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        />
      </div>
    </footer>
  );
};

export default Footer;
