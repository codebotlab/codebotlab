import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonials-area-two pb-130 rpb-100 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Clients Feedback</span>
              <h2>What Our Clients Say Us</h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="testimonial-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img
                src="assets/images/testimonials/testi-author1.jpg"
                alt="Author"
              />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="testi-text">
                Sed ut perspiciatis unde omnis iste natus voluptatem accus
                antiume dolorem queauy antium totam aperiam eaque quaey abillosa
                inventore veritatis vitaec
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation"></i>
                </div>
                <div className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow fadeInUp delay-0-4s">
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="testi-text">
                On the other hand denounce righteous indignations and dislike
                men who beguiled and demoralized by the charms of pleasure
                moment blinded foresee
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation"></i>
                </div>
                <div className="title">
                  <h4>Jose T. McMichael</h4>
                  <span className="designation">Senior Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow fadeInUp delay-0-6s">
            <div className="image">
              <img
                src="assets/images/testimonials/testi-author4.jpg"
                alt="Author"
              />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="testi-text">
                Unde omnis iste natus voluptatem accus antiume dolorem queauy
                antium totam aperiam eaque quaey abillosa inventore veritatis
                etuarchite beatae vitaec
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation"></i>
                </div>
                <div className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* <div data-slick='{"slidesToShow": 2, "slidesToScroll": 2}'>
          <div className="testimonial-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img
                src="assets/images/testimonials/testi-author1.jpg"
                alt="Author"
              />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="testi-text">
                Sed ut perspiciatis unde omnis iste natus voluptatem accus
                antiume dolorem queauy antium totam aperiam eaque quaey abillosa
                inventore veritatis vitaec
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation"></i>
                </div>
                <div className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow fadeInUp delay-0-4s">
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="testi-text">
                On the other hand denounce righteous indignations and dislike
                men who beguiled and demoralized by the charms of pleasure
                moment blinded foresee
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation"></i>
                </div>
                <div className="title">
                  <h4>Jose T. McMichael</h4>
                  <span className="designation">Senior Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow fadeInUp delay-0-6s">
            <div className="image">
              <img
                src="assets/images/testimonials/testi-author4.jpg"
                alt="Author"
              />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="testi-text">
                Unde omnis iste natus voluptatem accus antiume dolorem queauy
                antium totam aperiam eaque quaey abillosa inventore veritatis
                etuarchite beatae vitaec
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation"></i>
                </div>
                <div className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
