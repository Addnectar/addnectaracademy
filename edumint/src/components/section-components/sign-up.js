import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SignUP extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="signup-page-area pd-top-120 pd-bottom-120">
			  <div className="container">
			    <div className="row justify-content-center">
				<div className="col-lg-8">
			        <form className="contact-form-inner mt-mn-200 style-shadow">
			          <div className="section-title">
			            <h2 className="title">Enquire Now</h2>
			            <p>We will be happy to answer your questions.</p>
			          </div>
			          <div className="row">
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Full name" />
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Phone Number" />
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Email Address" />
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Subject" />
			              </div>
			            </div>
			            <div className="col-12">
			              <div className="single-input-inner">
			                <textarea placeholder="Your Message" defaultValue={""} />
			              </div>
			            </div>
			            <div className="col-sm-6 align-self-center">
			              <div className="single-input-inner style-checkbox">
			                <input type="checkbox" />
			                Also subscribe us
			              </div>
			            </div>
			            <div className="col-sm-6 text-sm-right">
			              <a className="btn btn-base" href="#">Send Message</a>
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