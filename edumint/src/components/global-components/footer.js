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
		  <div className="footer-subscribe">
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
		  </div>
		  <div className="footer-top">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-3 col-md-6">
		          <div className="widget widget_contact">
		            <h4 className="widget-title">Contact Us</h4>
		            <ul className="details">
		              <li><i className="fa fa-map-marker" /> 420 Love Sreet 133/2 Street NewYork</li>
		              <li><i className="fa fa-envelope" /> info.contact@gmail.com</li>
		              <li><i className="fa fa-phone" /> 012 345 678 9101</li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-6">
		          <div className="widget widget_nav_menu widget_nav_menu_custom" style={{margin: '0px 0px 0px 0px'}}>
		            <h4 className="widget-title">Courses</h4>
		            <ul className="go-top">
		              <li><Link to="/blog">Branding design</Link></li>
		              <li><Link to="/blog">Ui/Ux designing </Link></li>
		              <li><Link to="/blog">Make Elements</Link></li>
		              <li><Link to="/blog">Business</Link></li>
		            </ul>
		          </div>
		        </div>
				<div className="col-lg-3 col-md-6">
		          <div className="widget custom-course-footer">
		            <ul className="go-top custom-course-footer">
		              <li><Link to="/blog">Branding design</Link></li>
		              <li><Link to="/blog">Ui/Ux designing </Link></li>
		              <li><Link to="/blog">Make Elements</Link></li>
		              <li><Link to="/blog">Business</Link></li>
		            </ul>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="footer-bottom">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-4 col-md-6 align-self-center">
		          <a href="index.html"><img src={publicUrl+"assets/img/footer-logo.png"} alt="img" /></a>
		        </div>
		        <div className="col-lg-4  col-md-6 order-lg-12 text-md-right align-self-center">
		          <ul className="social-media mt-md-0 mt-3">
		            <li><a className="facebook" href="https://www.facebook.com/solverwp/"><i className="fa fa-facebook" /></a></li>
		            <li><a className="twitter" href="https://www.twitter.com/solverwp"><i className="fa fa-twitter" /></a></li>
		            <li><a className="instagram" href="https://www.youtube.com/solverwp/"><i className="fa fa-instagram" /></a></li>
		            <li><a className="youtube" href="https://www.youtube.com/solverwp/"><i className="fa fa-youtube" /></a></li>
		            <li><a className="pinterest" href="https://www.pinterest.com/solverwp/"><i className="fa fa-pinterest" /></a></li>
		          </ul>
		        </div>
		        <div className="col-lg-4 order-lg-8 text-lg-center align-self-center mt-lg-0 mt-3">
		          <p>copyright 2022 by addnectaracademy.com</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</footer>

        )
    }
}


export default Footer_v1