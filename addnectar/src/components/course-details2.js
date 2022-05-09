import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import CourseDetailsSection2 from './section-components/course-details2';
import Footer from './global-components/footer';

const CourseDetails2 = () => {
    document.title = "Addnectar Academy - Courses";
    return <div>
        <Navbar />
        <PageHeader headertitle="Courses Details"  />
        <CourseDetailsSection2 />
        <Footer />
    </div>
}

export default CourseDetails2

