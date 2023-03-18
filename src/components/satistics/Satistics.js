import React from 'react';

const Satistics = () => {
  return (
    <section className="statistics-area-two rel z-2 mb-130 rmb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">
                Company Statistics Database
              </span>
              <h2>5,000+ Completed Projects in 41+ Countries</h2>
            </div>
          </div>
        </div>
        <div className="row no-gap justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
              <div className="icon">
                <i className="flaticon-target"></i>
              </div>
              <div className="content">
                <span
                  className="count-text plus"
                  data-speed="3000"
                  data-stop="35"
                >
                  0
                </span>
                <span className="counter-title">Years Of Experience</span>
                <p>Over 20 years of experience and 850+ employees</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-5s">
              <div className="icon">
                <i className="flaticon-target"></i>
              </div>
              <div className="content">
                <span
                  className="count-text plus"
                  data-speed="3000"
                  data-stop="693"
                >
                  0
                </span>
                <span className="counter-title">Project Complate</span>
                <p>Over 20 years of experience and 850+ employees</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-7s">
              <div className="icon">
                <i className="flaticon-target"></i>
              </div>
              <div className="content">
                <span
                  className="count-text percent"
                  data-speed="3000"
                  data-stop="98"
                >
                  0
                </span>
                <span className="counter-title">Clients Satisfaction</span>
                <p>Over 20 years of experience and 850+ employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Satistics;
