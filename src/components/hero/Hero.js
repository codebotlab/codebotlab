import React from 'react';

const styles = {
  backgroundImage: `url(./assets/images/hero/hero-two.jpg)`,
};

const Hero = () => {
  return (
    <section className="hero-area-two bgs-cover" style={styles}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hero-content-two pt-155 pb-160 rpt-115 rpb-65 wow fadeInUp delay-0-4s">
              <span className="sub-title">IT Solution Comapny</span>
              <h1>Innovation Digital IT Solutions</h1>
              <a
                href="about.html"
                className="theme-btn mt-25 wow fadeInUp delay-0-6s"
              >
                Let’s Get Started <i className="fas fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 col-10 col-small">
            <div className="hero-gradient-circle">
              <div className="icon">
                <img src="assets/images/hero/hero-circle-icon.png" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-consulting"></i>
              </div>
              <h5>
                <a href="service-details.html">Consulting</a>
              </h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
            <div className="feature-item wow fadeInDown delay-0-2s">
              <div className="icon">
                <i className="flaticon-project-management"></i>
              </div>
              <h5>
                <a href="service-details.html">Management</a>
              </h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-ui"></i>
              </div>
              <h5>
                <a href="service-details.html">Application</a>
              </h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
            <div className="feature-item wow fadeInDown delay-0-2s">
              <div className="icon">
                <i className="flaticon-coding-1"></i>
              </div>
              <h5>
                <a href="service-details.html">Development</a>
              </h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-seo-1"></i>
              </div>
              <h5>
                <a href="service-details.html">SEO Optimize</a>
              </h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
            <div className="feature-item wow fadeInDown delay-0-2s">
              <div className="icon">
                <i className="flaticon-rocket"></i>
              </div>
              <h5>
                <a href="service-details.html">Business Dev</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shapes-two">
        <img src="assets/images/hero/hero-bg-lines.png" alt="BG Lines" />
      </div>
    </section>
  );
};

export default Hero;
