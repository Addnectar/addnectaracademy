import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import sendEmail from '.././sendEmail';

class SignUP extends Component {
	// sendEmail.sendEmail("sub","msg");
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="signup-page-area pd-top-120 pd-bottom-120">
			  <div className="container">
			    <div className="row justify-content-center">
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
			    </div>
			  </div>
			</div>
        }
}

export default SignUP