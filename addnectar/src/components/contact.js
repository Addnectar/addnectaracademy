import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import ContactPage from './section-components/contact-page';
import Footer from './global-components/footer';

const Contact = () => {
    document.title = "Addnectar Academy - Contact Us";
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact Us"  />
        <ContactPage />
        <Footer />
    </div>
}

export default Contact

