import React from 'react';

const CustomerSatisfaction = () => {
  return (
    <section className="customer-satisfaction-area py-100 rpy-70 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-15">
                <span className="sub-title mb-15">
                  Guaranteed Customer Satisfaction
                </span>
                <h2>Ideate, Design And Fuel Business Growth</h2>
              </div>
              <p>
                With over 20 years of experience and 850+ employees board,
                Iflexion serves medium-sized and large companies globally.
                Profound knowledge coupled with business understanding is what
                allows us to create unique solutions that power enterprises,
                their employees.
              </p>
              <div className="row pt-15">
                <div className="col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-trust"></i>
                    </div>
                    <h4>
                      <a href="service-details.html">Best Trusted Partner</a>
                    </h4>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-technical-support"></i>
                    </div>
                    <h4>
                      <a href="service-details.html">24/7 Tehnical Support</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs-image-part mb-30 wow fadeInRight delay-0-2s">
              <a
                href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                className="mfp-iframe video-play style-two"
                tabIndex="0"
              >
                <i className="fas fa-play"></i>
              </a>
              <div className="image">
                <img
                  src="assets/images/about/satisfaction.jpg"
                  alt="Satisfaction"
                />
              </div>
              <div className="experience-years">
                <h4>25 Years Of Experience IT Solutions</h4>
                <img
                  src="assets/images/about/satisfaction-author.png"
                  alt="Author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfaction;
