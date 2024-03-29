import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

   componentDidMount() {

     const $ = window.$;

     $( 'body' ).removeClass( 'home-3' );

   }

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div className="navbar-area">
            {/* navbar top start */}
            <div className="navbar-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="text-md-right d-flex justify-content-between">
                      <li><p><i className="fa fa-map-marker" />902-903, Suratwala Mark Plazzo, Wakad-Hinjewadi Road</p></li>
                      <li><a href="mailto:info@addnectaracademy.com"><i className="fa fa-envelope" />info@addnectaracademy.com</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="text-md-right">
                      <li className="social-area">
                        <a href="https://wa.me/+918108167706"><img src={publicUrl+"assets/img/icon/whatsapp.png"} alt="img" />+91 8108167706</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-area-1 navbar-area navbar-expand-lg">
              <div className="container nav-container">
                <div className="responsive-mobile-menu">
                  <button className="menu toggle-btn d-block d-lg-none" data-target="#edumint_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-left" />
                    <span className="icon-right" />
                  </button>
                </div>
                <div className="logo">
                  <Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="img" /></Link>
                </div>
                <div className="nav-right-part nav-right-part-mobile">
                </div>
                <div className="collapse navbar-collapse go-top" id="edumint_main_menu">
                  <ul className="navbar-nav menu-open">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                  </ul>
                </div>
                <div className="nav-right-part nav-right-part-desktop">
                  <Link className="btn btn-base" to="/enquiry">Enquire Now</Link>
                </div>
              </div>
            </nav>
          </div>


        )
    }
}


export default Navbar