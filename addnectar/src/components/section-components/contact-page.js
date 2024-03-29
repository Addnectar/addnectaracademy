import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div>
			  <div className="contact-list pd-top-120 pd-bottom-90">
			    <div className="container">
			      <div className="row ">
			        <div className="col-lg-4">
			          <div className="contact-list-inner">
			            <div className="media">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/icon/17.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h5>Phone</h5>
			                <a href="tel:9137423179"><p>+91 8108167706</p></a>
			              </div>
			            </div>
			          </div>
			        </div>
					<div className="col-lg-4">
			          <div className="contact-list-inner">
			            <div className="media">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/icon/28.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h5>WhatsApp</h5>
			                <a href="https://wa.me/+918108167706"><p>+91 8108167706</p></a>
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
			                <h5>Email</h5>
							<a href="mailto:info@addnectaracademy.com"><p>info@addnectaracademy.com</p></a>
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
						  <h5>Pune Address</h5>
			                <p>902-903, Suratwala Mark Plazzo, Wakad-Hinjewadi Road, Pimpri-Chinchwad, Maharashtra 411057</p>
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
						  <h5>Mumbai Address</h5>
			                <p>E-418, Floral Deck Plaza, MIDC, Seepz, 23rd Rd, Andheri (East)</p>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* <div className="contact-g-map d-flex">
				<div className="w-50 pr-2 mr-1 border">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6008837721693!2d73.75489567595771!3d18.5920239669862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e55175009f%3A0xb92f8442017bd6c!2sSuratwala%20Mark%20Plazzo!5e0!3m2!1sen!2sin!4v1711609701179!5m2!1sen!2sin"/>
				</div>

				<div className="w-50 pl-2 ml-1 border">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6203409921677!2d72.86839781473043!3d19.124304487060208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c823dd89ebab%3A0x43c5b109ecaf9b!2sAdd%20Nectar!5e0!3m2!1sen!2sin!4v1645536894636!5m2!1sen!2sin"/>
				</div>

			  </div> */}
			</div>

        }
}

export default ContactPage