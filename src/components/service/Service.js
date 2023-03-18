import React from 'react';

const Service = () => {
  return (
    <section className="services-area-two rel z-2">
      <div className="container">
        <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-10">What We Provides</span>
          <h2>Digital Core Services</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item-two wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/services/service1.png" alt="Service" />
              </div>
              <div className="content">
                <h4 className="title">Digital Marketing</h4>
                <ul className="list-style-three">
                  <li>Paid Marketing</li>
                  <li>CRO</li>
                  <li>Content Marketing</li>
                  <li>Email Marketing</li>
                  <li>SMO</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item-two wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/services/service2.png" alt="Service" />
              </div>
              <div className="content">
                <h4 className="title">Mobile Application</h4>
                <ul className="list-style-three">
                  <li>Unique UI Design</li>
                  <li>Clean Development</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                  <li>React Native</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item-two wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/services/service3.png" alt="Service" />
              </div>
              <div className="content">
                <h4 className="title">Web Development</h4>
                <ul className="list-style-three">
                  <li>Development Consulting</li>
                  <li>UX/UI Cool Design</li>
                  <li>Software Engineering</li>
                  <li>Product Development</li>
                  <li>Enhancement</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item-two wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/services/service4.png" alt="Service" />
              </div>
              <div className="content">
                <h4 className="title">Technical Support</h4>
                <ul className="list-style-three">
                  <li>Security Management </li>
                  <li>Automated Deployments </li>
                  <li>Incident Management(SLA)</li>
                  <li>Compliance Monitoring</li>
                  <li>CI/CD and DevOps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
