import React from 'react';

const ChooseUs = () => {
  return (
    <section className="why-choose-us-area py-130 rpy-100 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Why Choose Us</span>
              <h2>Top-Notch Software Development and Digital Transformation</h2>
            </div>
          </div>
        </div>
        <div className="why-choose-tab">
          <ul className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#wc-tap1"
              >
                <i className="flaticon-creativity"></i>{' '}
                <span>UX/UI Design</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#wc-tap2">
                <i className="flaticon-test"></i> <span>Apps Development</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#wc-tap3">
                <i className="flaticon-cyber-security-1"></i>{' '}
                <span>Cyber Security</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#wc-tap4">
                <i className="flaticon-support"></i> <span>Tech Support</span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="wc-tap1">
              <div className="row gap-90 align-items-center">
                <div className="col-lg-6">
                  <div className="why-choose-image rmb-55">
                    <img
                      src="assets/images/about/why-choose1.jpg"
                      alt="Why Choose"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-choose-content">
                    <h3>
                      An impactful Application Needs an innovative and
                      interactive.
                    </h3>
                    <p>
                      Our experts help create the right website for across all
                      major platforms and devices. Taking into consideration
                      your user behavior volu promotey the optimal experience we
                      design responsive performance
                    </p>
                    <ul className="list-style-one pt-5">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research and 360° Planning</li>
                      <li>Wireframing & Prototyping</li>
                    </ul>
                    <a href="about.html" className="theme-btn mt-30">
                      Learn More <i className="fas fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="wc-tap2">
              <div className="row gap-90 align-items-center">
                <div className="col-lg-6">
                  <div className="why-choose-content">
                    <h3>
                      An impactful Application Needs an innovative and
                      interactive.
                    </h3>
                    <p>
                      Our experts help create the right website for across all
                      major platforms and devices. Taking into consideration
                      your user behavior volu promotey the optimal experience we
                      design responsive performance
                    </p>
                    <ul className="list-style-one pt-5">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research and 360° Planning</li>
                      <li>Wireframing & Prototyping</li>
                    </ul>
                    <a href="about.html" className="theme-btn mt-30">
                      Learn More <i className="fas fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-choose-image rmt-55">
                    <img
                      src="assets/images/about/why-choose1.jpg"
                      alt="Why Choose"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="wc-tap3">
              <div className="row gap-90 align-items-center">
                <div className="col-lg-6">
                  <div className="why-choose-image rmb-55">
                    <img
                      src="assets/images/about/why-choose1.jpg"
                      alt="Why Choose"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-choose-content">
                    <h3>
                      An impactful Application Needs an innovative and
                      interactive.
                    </h3>
                    <p>
                      Our experts help create the right website for across all
                      major platforms and devices. Taking into consideration
                      your user behavior volu promotey the optimal experience we
                      design responsive performance
                    </p>
                    <ul className="list-style-one pt-5">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research and 360° Planning</li>
                      <li>Wireframing & Prototyping</li>
                    </ul>
                    <a href="about.html" className="theme-btn mt-30">
                      Learn More <i className="fas fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="wc-tap4">
              <div className="row gap-90 align-items-center">
                <div className="col-lg-6">
                  <div className="why-choose-content">
                    <h3>
                      An impactful Application Needs an innovative and
                      interactive.
                    </h3>
                    <p>
                      Our experts help create the right website for across all
                      major platforms and devices. Taking into consideration
                      your user behavior volu promotey the optimal experience we
                      design responsive performance
                    </p>
                    <ul className="list-style-one pt-5">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research and 360° Planning</li>
                      <li>Wireframing & Prototyping</li>
                    </ul>
                    <a href="about.html" className="theme-btn mt-30">
                      Learn More <i className="fas fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-choose-image rmt-55">
                    <img
                      src="assets/images/about/why-choose1.jpg"
                      alt="Why Choose"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-shapes">
        <img
          className="shape one"
          src="assets/images/about/why-choose-shape1.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/about/why-choose-shape2.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};

export default ChooseUs;
