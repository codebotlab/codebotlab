import React from 'react';

const About = () => {
  return (
    <section className="about-area-two py-130 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center gap-90">
          <div className="col-lg-6">
            <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
              <img src="assets/images/about/about-two.jpg" alt="About" />
              <div className="bg-circle-shape"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">About Company</span>
                <h2>Small Enough to Care Big Enough to Success</h2>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
              <div className="about-btns">
                <a href="about.html" className="theme-btn style-three mt-15">
                  Learn More <i className="fas fa-long-arrow-right"></i>
                </a>
                <div className="hotline mt-15">
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
        </div>
      </div>
    </section>
  );
};

export default About;
