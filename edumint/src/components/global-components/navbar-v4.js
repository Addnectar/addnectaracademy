import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV4 extends Component {

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
        <div className="navbar-top">
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-md-left text-center">
                <ul>
                  <li><p><i className="fa fa-map-marker" />E-418, Floral Deck Plaza, MIDC, Seepz, 23rd Rd, Andheri (East)</p></li>
                  <li><a href="mailto:someone@example.com"><i className="fa fa-envelope" /> info@addnectaracademy.com</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="topbar-right text-md-right text-center">
                  <li className="social-area">
                    <a href="https://wa.me/+919137423173"><i className="fa fa-whatsapp" style={{marginRight:'0.5em'}} aria-hidden="true" />+91 9137423173</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar bg-white navbar-area-1 navbar-area navbar-expand-lg go-top">
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
            <div className="collapse navbar-collapse" id="edumint_main_menu">
              <ul className="navbar-nav menu-open">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/course">Courses</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
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


export default NavbarV4