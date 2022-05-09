import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import SignUp from './section-components/sign-up';
import Footer from './global-components/footer';

const SingUpPage = () => {
    document.title = "Addnectar Academy - Industry oriented graphics design courses";
    return <div>
        <Navbar />
        <PageHeader headertitle="Enquire Now" />
        <SignUp />
        <Footer />
    </div>
}

export default SingUpPage

