import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class HowToWork extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="work-area pd-top-10 go-top">
			  <div className="container">
			    <div className="section-title">
			      <div className="row">
			        <div className="col-lg-6 align-self-center">
			          <h6 className="sub-title right-line">Enrolling to getting hired</h6>
			          <h2 className="title">How it works?</h2>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/12.png"} alt="img" />
			            <div className="intro-count">1</div>
			          </div>
			          <div className="details">
			            <h5>Enroll</h5>
			            <p>Talk to our counsellor and enroll in a career course of your choice.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/13.png"} alt="img" />
			            <div className="intro-count">2</div>
			          </div>
			          <div className="details">
			            <h5>Get Trained</h5>
			            <p>Get trained in curriculum that is designed to excel in the graphics career path.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/14.png"} alt="img" />
			            <div className="intro-count">3</div>
			          </div>
			          <div className="details">
			            <h5>Get Certified</h5>
			            <p>Pass the required exams or complete assignments and get certified.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/15.png"} alt="img" />
			            <div className="intro-count">4</div>
			          </div>
			          <div className="details">
			            <h5>Get Hired</h5>
			            <p>Get hired immediately within our graphics studio or with other employers.</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default HowToWork