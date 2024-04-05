import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Enquiry from './enquiryform.js';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="contact-area bg-overlay mt-200 pd-bottom-90" style={{backgroundImage: 'url("'+publicUrl+'assets/img/banner/2.png")'}}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
				  	<Enquiry/>
			      </div>
			      <div className="col-lg-6 align-self-end">
			        <div className="mt-5 mt-lg-0">
			          <ul className="single-list-wrap">
			            <li className="single-list-inner style-white style-check-box-grid-2" style={{marginTop: '1em'}}>
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/16.png"} alt="img" />
			                </div>
			                
							<div className="media-body d-flex">
							<div className="address1">
			                <h5>Pune Address</h5>
			                <p>902-903, Suratwala Mark Plazzo, Wakad-Hinjewadi Road, Pimpri-Chinchwad, Maharashtra 411057</p>
							</div>

							<div className="address1">
							<h5>Mumbai Address</h5>
			                <p>E-418, Floral Deck Plaza, MIDC, Seepz, 23rd Rd, Andheri (East)</p>
							</div>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/17.png"} alt="img" />
			                </div>
			                <div className="media-body">
			                  <h5>Phone</h5>
			                  <a href="tel:8108167706"><p>+91 8108167706</p></a>
			                </div>
			              </div>
			            </li>
						<li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/28.png"} alt="img" />
			                </div>
			                <div className="media-body">
			                  <h5>WhatsApp</h5>
							  <a href="https://wa.me/+918108167706"><p>+91 8108167706</p></a>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/18.png"} alt="img" />
			                </div>
			                <div className="media-body">
			                  <h5>Email</h5>
							  <a href="mailto:info@addnectaracademy.com"><p>info@addnectaracademy.com</p></a>
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