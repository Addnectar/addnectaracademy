import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div>
			  <div className="contact-list pd-top-120 pd-bottom-90">
			    <div className="container">
			      <div className="row justify-content-center">
			        <div className="col-lg-4">
			          <div className="contact-list-inner">
			            <div className="media">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/icon/17.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h5>Our Phone</h5>
			                <a href="tel:9137423173"><p>+91 9137423173</p></a>
							<br></br>
							<br></br>
							<br></br>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4">
			          <div className="contact-list-inner">
			            <div className="media">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/icon/18.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h5>Our Email</h5>
							<a href="mailto:someone@example.com"><p>info@addnectaracademy.com</p></a>
							<br></br>
							<br></br>
							<br></br>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4">
			          <div className="contact-list-inner">
			            <div className="media">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/icon/16.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h5>Our Address</h5>
			                <p>E-418, Floral Deck Plaza, MIDC, Seepz, 23rd Rd, Andheri (East), Mumbai 400093</p>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="contact-g-map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6203409921677!2d72.86839781473043!3d19.124304487060208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c823dd89ebab%3A0x43c5b109ecaf9b!2sAdd%20Nectar!5e0!3m2!1sen!2sin!4v1645536894636!5m2!1sen!2sin" />
			  </div>
			</div>

        }
}

export default ContactPage