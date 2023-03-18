import React from 'react';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Service from '../components/service/Service';
import CustomerSatisfaction from '../components/customerSatisfaction/CustomerSatisfaction';
import ChooseUs from '../components/chooseUs/ChooseUs';
import Statistics from '../components/satistics/Satistics';
import Project from '../components/project/Project';
import Blog from '../components/blog/Blog';
import Testimonial from '../components/testimonial/Testimonial';

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <CustomerSatisfaction />
      <Statistics />
      <Project />
      <ChooseUs />
      <Blog />
      <Testimonial />
    </>
  );
};

export default Main;
