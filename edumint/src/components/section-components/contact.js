import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="contact-area bg-overlay mt-200 pd-bottom-90" style={{backgroundImage: 'url("'+publicUrl+'assets/img/banner/2.png")'}}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-8">
			        <form className="contact-form-inner mt-mn-200 style-shadow">
			          <div className="section-title">
			            <h2 className="title">Enquire Now</h2>
			            <p>Fill the form below to get a response on your questions about our courses by next working day.</p>
			          </div>
			          <div className="row">
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Full name" required/>
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Phone Number" required/>
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Email Address" required/>
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Subject" required/>
			              </div>
			            </div>
			            <div className="col-12">
			              <div className="single-input-inner">
			                <textarea placeholder="Your Message" defaultValue={""} required/>
			              </div>
			            </div>
			            <div className="col-sm-6 text-sm-right" style={{ display: "flex" }}>
							<button className="btn btn-base" type="submit" style={{ justifyContent: 'flex-end'}}>Send Message</button>
			            </div>
			          </div>
			        </form>
			      </div>
			      <div className="col-lg-4 align-self-end">
			        <div className="mt-5 mt-lg-0">
			          <ul className="single-list-wrap">
			            <li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/16.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5>Our Address</h5>
			                  <p>E-418, Floral Deck Plaza, MIDC, Seepz, 23rd Rd, Andheri (East), Mumbai 400093</p>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/17.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5>Our Phone</h5>
			                  <a href="tel:9137423173"><p>+91 9137423173</p></a>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/18.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5>Our Email</h5>
							  <a href="mailto:someone@example.com"><p>info@addnectaracademy.com</p></a>
			                </div>
			              </div>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Contact