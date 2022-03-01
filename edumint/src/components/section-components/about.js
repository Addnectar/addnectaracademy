import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="about-area pd-top-140">
			  <div className="container">
			    <div className="about-area-inner">
			      <div className="row">
			        <div className="col-lg-6">
			          <div className="about-thumb-wrap left-icon" style={{backgroundImage: 'url("'+publicUrl+'assets/img/banner/2.png")'}}>
			            <div className="about-icon"><img src={publicUrl+"assets/img/icon/4.png"} alt="img" /></div>
			            <div className="bottom-content">
							Real world teaching not software training
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-6">
			          <div className="about-inner-wrap pl-xl-4 pt-5 pt-lg-0 mt-5 mt-lg-0">  
			            <div className="section-title mb-0">
			              <h6 className="sub-title right-line">ABOUT US</h6>
			              <h2 className="title">Strength in Numbers</h2>
			              <p className="content">
						  		Addnectar academy was established to bridge the gap between what is taught and what is used within the industry. 
								  We not only teach but have been running large graphics processing service for over 10 years. Our aim is to teach Graphics Design rather than just software.
						  </p>
			              <ul className="single-list-wrap">
			                <li className="single-list-inner style-check-box-grid">
			                  <div className="media">
			                    <div className="media-left">
			                      <i className="fa fa-check" />
			                    </div>
			                    <div className="media-body" style={{marginTop: '0.8em'}}>
			                      <h5>Built 1000+ careers</h5>
			                      {/* <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p> */}
			                    </div>
			                  </div>
			                </li>
			                <li className="single-list-inner style-check-box-grid">
			                  <div className="media">
			                    <div className="media-left">
			                      <i className="fa fa-check" />
			                    </div>
			                    <div className="media-body" style={{marginTop: '0.8em'}}>
			                      <h5>100% immediate placement</h5>
			                      {/* <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p> */}
			                    </div>
			                  </div>
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default About