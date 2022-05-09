import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Course from './section-components/course-page';
import Footer from './global-components/footer';

const AboutPage = () => {
    document.title = "Addnectar Academy - Courses";
    return <div>
        <Navbar />
        <PageHeader headertitle="Courses"  />
        <Course />
        <Footer />
    </div>
}

export default AboutPage

