import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import CourseDetailsSection3 from './section-components/course-details3';
import Footer from './global-components/footer';

const CourseDetails3 = () => {
    document.title = "Addnectar Academy - Courses";
    return <div>
        <Navbar />
        <PageHeader headertitle="Courses Details"  />
        <CourseDetailsSection3 />
        <Footer />
    </div>
}

export default CourseDetails3

