import React from 'react';

const Header = () => {
  return (
    <header className="main-header header-two">
      <div className="header-top-wrap bgc-secondary">
        <div className="container-fluid">
          <div className="header-top">
            <div className="text">
              <span className="hello">Hello</span> We’re professional IT
              solutions company. Let’s work together{' '}
              <a href="contact.html">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      {/* Header-Upper */}
      <div className="header-upper bg-white">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </div>
            </div>
            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header py-10">
                  <div className="mobile-logo">
                    <a href="index.html">
                      <img
                        src="assets/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="dropdown">
                      <a href="#">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">IT Company</a>
                        </li>
                        <li>
                          <a href="index2.html">IT Solutions</a>
                        </li>
                        <li>
                          <a href="index3.html">IT Services</a>
                        </li>
                        <li>
                          <a href="index4.html">IT Agency</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">services</a>
                      <ul>
                        <li>
                          <a href="services.html">Services One</a>
                        </li>
                        <li>
                          <a href="services2.html">Services Two</a>
                        </li>
                        <li>
                          <a href="service-details.html">service details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Project</a>
                      <ul>
                        <li>
                          <a href="project-grid.html">Project Grid</a>
                        </li>
                        <li>
                          <a href="project-masonry.html">Project Masonry.</a>
                        </li>
                        <li>
                          <a href="project-details.html">Project Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">shop</a>
                      <ul>
                        <li>
                          <a href="shop.html">shop grid</a>
                        </li>
                        <li>
                          <a href="product-details.html">product details</a>
                        </li>
                        <li>
                          <a href="cart.html">cart page</a>
                        </li>
                        <li>
                          <a href="checkout.html">checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">blog standard</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="faqs.html">faqs</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Plan</a>
                        </li>
                        <li>
                          <a href="404.html">404 error</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="nav-search ms-xl-auto py-10">
              <button className="far fa-search"></button>
              <form action="#" className="hide">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required=""
                />
                <button
                  type="submit"
                  className="searchbutton far fa-search"
                ></button>
              </form>
            </div>
            <div className="menu-btns">
              <a href="contact.html" className="theme-btn">
                Get a Quote <i className="fas fa-long-arrow-right"></i>
              </a>
            </div>
            <div className="social-style-two">
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
      </div>
    </header>
  );
};

export default Header;
