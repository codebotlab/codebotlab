import React from 'react';

const Blog = () => {
  return (
    <section className="blog-area-two pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row align-items-end pb-35">
          <div className="col-lg-8">
            <div className="section-title mb-25 wow fadeInLeft delay-0-2s">
              <span className="sub-title mb-10">Our Blog & News</span>
              <h2>Latest Blog, New & Articles</h2>
            </div>
          </div>
          <div className="col-lg-4 mb-25 text-lg-end">
            <a
              href="blog.html"
              className="theme-btn style-four wow fadeInRight delay-0-2s"
            >
              View More News <i className="fas fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="blog-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/blog/blog1.jpg" alt="Blog" />
              </div>
              <div className="content">
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt"></i>{' '}
                    <a href="#">Jule 26, 2022</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt"></i>{' '}
                    <a href="#">Comments (25)</a>
                  </li>
                </ul>
                <h4>
                  <a href="blog-details.html">
                    Voice Usabilit Consideration Partially Visually Hidden
                  </a>
                </h4>
                <div className="author-more">
                  <span className="author">
                    By <a href="#">Luis J. Hill</a>
                  </span>
                  <a href="blog-details.html" className="read-more">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/blog/blog2.jpg" alt="Blog" />
              </div>
              <div className="content">
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt"></i>{' '}
                    <a href="#">Jule 26, 2022</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt"></i>{' '}
                    <a href="#">Comments (25)</a>
                  </li>
                </ul>
                <h4>
                  <a href="blog-details.html">
                    How Create Van JavaScript Gant Chart Adding Task
                  </a>
                </h4>
                <div className="author-more">
                  <span className="author">
                    By <a href="#">Luis J. Hill</a>
                  </span>
                  <a href="blog-details.html" className="read-more">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/blog/blog3.jpg" alt="Blog" />
              </div>
              <div className="content">
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt"></i>{' '}
                    <a href="#">Jule 26, 2022</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt"></i>{' '}
                    <a href="#">Comments (25)</a>
                  </li>
                </ul>
                <h4>
                  <a href="blog-details.html">
                    Smashing Podcast Episode 47 Soueidan Accessibility{' '}
                  </a>
                </h4>
                <div className="author-more">
                  <span className="author">
                    By <a href="#">Luis J. Hill</a>
                  </span>
                  <a href="blog-details.html" className="read-more">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
