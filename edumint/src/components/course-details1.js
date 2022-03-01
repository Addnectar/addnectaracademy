import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import CourseDetailsSection1 from './section-components/course-details1';
import Footer from './global-components/footer';

const CourseDetails1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Courses Details"  />
        <CourseDetailsSection1 />
        <Footer />
    </div>
}

export default CourseDetails1

