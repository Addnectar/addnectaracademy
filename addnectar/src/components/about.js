import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import About from './section-components/about-v2';
import Testimonial from './section-components/testimonial-v4';
import Footer from './global-components/footer';

const AboutPage = () => {
    document.title = "Addnectar Academy - About Us";
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us"  />
        <About sectionclass="pd-bottom-120" />
        <Testimonial />
        <Footer />
    </div>
}

export default AboutPage

