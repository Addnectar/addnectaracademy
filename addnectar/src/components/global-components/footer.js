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
		  <div className="footer-top">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-3 col-md-6">
		          <div className="widget widget_contact">
		            <h4 className="widget-title">Contact Us</h4>
		            <ul className="details">
		              <li><i className="fa fa-map-marker" /><strong>Pune</strong></li>
					  <li>902-903, Suratwala Mark Plazzo, Wakad-Hinjewadi Road, Pimpri-Chinchwad, Maharashtra 411057</li>
					  <li className='mt-3'><i className="fa fa-map-marker" /><strong>Mumbai</strong> </li>
					  <li>E-418, Floral Deck Plaza, MIDC, Seepz, 23rd Rd, Andheri (East)</li>
		              <li className='mt-3'><a href="mailto:info@addnectaracademy.com"><i className="fa fa-envelope" />info@addnectaracademy.com</a></li>
					  <li><a href="tel:8108167706"><i className="fa fa-phone" />+91 8108167706</a></li>		  
					  <li style={{paddingLeft: '0px'}}><a href="https://wa.me/+918108167706"><img src={publicUrl+"assets/img/icon/whatsapp.png"} alt="icon" style={{paddingRight: '5px'}}/>Whatsapp</a></li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-6">
		          <div className="widget widget_nav_menu widget_nav_menu_custom" style={{margin: '0px 0px 0px 0px'}}>
		            <h4 className="widget-title">Courses</h4>
		            <ul className="go-top">
		              <li><Link to="/course-details-1">Diploma in Graphics Design Basic</Link></li>
					  <li><Link to="/course-details-2">Advanced Diploma in Graphics Design</Link></li>
		            </ul>
		          </div>
		        </div>
				<div className="col-lg-3 col-md-6">
		          <div className="widget custom-course-footer">
		            <ul className="go-top custom-course-footer">
					<li><Link to="/course-details-3">Professional Diploma in Graphics Design</Link></li>
		            </ul>
		          </div>
		        </div>
				<div className="col-lg-3 col-md-6">
		          <div className="widget widget_nav_menu widget_nav_menu_custom" style={{margin: '0px 0px 0px 0px'}}>
		            <h4 className="widget-title">Company</h4>
		            <ul className="go-top">
		              <li><Link to="/aboutus">About us</Link></li>
		              <li><Link to="/contactus">Contact Us </Link></li>
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
		          <a href="https://www.addnectar.com/" target="_blank"><img src={publicUrl+"assets/img/footer-logo.png"} alt="img" style={{maxHeight: '30px'}} /></a>
		        </div>
		        <div className="col-lg-3  col-md-6 order-lg-12 text-md-right align-self-center">
		          <ul className="social-media mt-md-0 mt-3">
		            <li><a className="facebook" href="https://www.facebook.com/AddNectar.Academy/"><i className="fa fa-facebook" /></a></li>
		            <li><a className="twitter" href="https://twitter.com/addnectara"><i className="fa fa-twitter" /></a></li>
		            <li><a className="instagram" href="https://www.instagram.com/addnectar.academy/"><i className="fa fa-instagram" /></a></li>
		            <li><a className="linkedin" href="https://in.linkedin.com/company/addnectar-academy"><i className="fa fa-linkedin" /></a></li>
		          </ul>
		        </div>
		        <div className="col-lg-5 order-lg-8 text-md-center align-self-center mt-lg-0 mt-3" >
		          <p style={{fontSize: '0.9em'}}>Copyright 2024 Addnectar Academy</p>
				  <p style={{fontSize: '0.7em'}}>A Division of <a href='https://addnectar.com/' target='blank'>Addnectar Solutions Pvt Ltd</a></p>
		        </div>
		      </div>
		    </div>
		  </div>
		</footer>

        )
    }
}


export default Footer_v1