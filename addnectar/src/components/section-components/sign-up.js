import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Enquiry from './enquiryform.js';

class SignUp extends Component {
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="signup-page-area pd-top-120 pd-bottom-120">
			  <div className="container">
			    <div className="row justify-content-center">
					<div className="col-lg-8">
						<Enquiry/>
					</div>
				</div>
			  </div>
			</div>
        }
}

export default SignUp