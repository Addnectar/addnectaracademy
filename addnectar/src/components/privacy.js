import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Privacy from './section-components/privacy-page';
import Footer from './global-components/footer';

const PrivacyPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Privacy Policy"  />
        <Privacy />
        <Footer />
    </div>
}

export default PrivacyPage