import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
		<footer className="footer-area bg-gray">
		  {/* <div className="footer-subscribe">
		    <div className="container">
		      <form className="footer-subscribe-inner">
		        <div className="row">
		          <div className="col-lg-5">
		            <div className="single-input-inner style-border-bottom">
		              <input type="text" placeholder="Your Full Name" />
		            </div>
		          </div>
		          <div className="col-lg-5">
		            <div className="single-input-inner style-border-bottom">
		              <input type="text" placeholder="Your Email Address" />
		            </div>
		          </div>
		          <div className="col-lg-2">
		            <a className="btn btn-base" href="#">Subscribe</a>
		          </div>
		        </div>
		      </form>
		    </div>
		  </div> */}
		  <div className="footer-top">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-3 col-md-6">
		          <div className="widget widget_contact">
		            <h4 className="widget-title">Contact Us</h4>
		            <ul className="details">
		              <li><i className="fa fa-map-marker" /> E-418, Floral Deck Plaza, MIDC, Seepz, 23rd Rd, Andheri (East), Mumbai 400093</li>
		              <li><a href="mailto:someone@example.com"><i className="fa fa-envelope" /> info@addnectaracademy.com</a></li>
					  <li><a href="tel:9137423173"><i className="fa fa-phone" /> +91 9137423173</a></li>
					  <li><a href="https://wa.me/+919137423173"><i className="fa fa-whatsapp" aria-hidden="true" />+91 9137423173</a></li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-6">
		          <div className="widget widget_nav_menu widget_nav_menu_custom" style={{margin: '0px 0px 0px 0px'}}>
		            <h4 className="widget-title">Courses</h4>
		            <ul className="go-top">
		              <li><Link to="/course-details-1">Diploma in Graphics Design Basic</Link></li>
		              <li><Link to="/course-details-3">Professional Diploma in Graphics Design</Link></li>
		            </ul>
		          </div>
		        </div>
				<div className="col-lg-3 col-md-6">
		          <div className="widget custom-course-footer">
		            <ul className="go-top custom-course-footer">
		              <li><Link to="/course-details-2">Advanced Diploma in Graphics Design</Link></li>
		            </ul>
		          </div>
		        </div>
				<div className="col-lg-3 col-md-6">
		          <div className="widget widget_nav_menu widget_nav_menu_custom" style={{margin: '0px 0px 0px 0px'}}>
		            <h4 className="widget-title">Company</h4>
		            <ul className="go-top">
		              <li><Link to="/about">About us</Link></li>
		              <li><Link to="/contact">Contact Us </Link></li>
		              <li><Link to="/enquiry">Enquire Now</Link></li>
		              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
		            </ul>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="footer-bottom">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-3 col-md-6 align-self-center">
		          <a href="https://www.addnectar.com/" target="_blank"><img src={publicUrl+"assets/img/footer-logo.png"} alt="img" /></a>
		        </div>
		        <div className="col-lg-3  col-md-6 order-lg-12 text-md-right align-self-center">
		          <ul className="social-media mt-md-0 mt-3">
		            <li><a className="facebook" href="/"><i className="fa fa-facebook" /></a></li>
		            <li><a className="twitter" href="/"><i className="fa fa-twitter" /></a></li>
		            <li><a className="instagram" href="/"><i className="fa fa-instagram" /></a></li>
		            <li><a className="youtube" href="/"><i className="fa fa-youtube" /></a></li>
		            <li><a className="pinterest" href="/"><i className="fa fa-pinterest" /></a></li>
		          </ul>
		        </div>
		        <div className="col-lg-5 order-lg-8 text-md-center align-self-center mt-lg-0 mt-3" >
		          <p style={{fontSize: '0.9em'}}>Copyright 2022 Addnectar Solutions Pvt. Ltd | Privacy Policy</p>
				  <p style={{fontSize: '0.7em'}}>A Division of Addnectar Solutions</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</footer>

        )
    }
}


export default Footer_v1