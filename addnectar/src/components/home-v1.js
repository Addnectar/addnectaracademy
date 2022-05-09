import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Intro from './section-components/intro';
import About from './section-components/about';
import CourseFilter from './section-components/course-filter';
import HowToWork from './section-components/how-to-work';
import Testimonial from './section-components/testimonial';
import Contact from './section-components/contact';
import Footer from './global-components/footer';

const Home_V1 = () => {
    document.title = "Addnectar Academy - Industry oriented graphics design courses";
    return <div>
        <Navbar />
        <Banner />
        <Intro />
        <About />
        <CourseFilter />
        <HowToWork />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
}

export default Home_V1

