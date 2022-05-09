import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

           let SectionClass = this.props.sectionclass ? this.props.sectionclass : ''

    return <div className={"about-area pd-top-120 go-top "+SectionClass}>
			  <div className="container">
			    <div className="about-area-inner">
			      <div className="row">
			        <div className="col-lg-6 col-md-10">
			          <div className="about-thumb-wrap after-shape" style={{backgroundImage: 'url("'+publicUrl+'assets/img/about/2.png")'}}>
			          </div>
			        </div>
			        <div className="col-lg-6">
			          <div className="about-inner-wrap">  
			            <div className="section-title mb-0">
			              <h6 className="sub-title right-line">ABOUT US</h6>
			              <h2 className="title">Providing value based, industry ready courses</h2>
			              <p className="content">
							Addnectar academy was established to bridge the gap between what is taught and what is used within the industry. We not only teach but have been running large graphics processing service for over 10 years. 
							Our aim is to teach Graphics Design rather than just software.
						  </p>
			              <div className="row">
			                <div className="col-sm-5">
			                  <ul className="single-list-wrap">
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Expert trainers
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Live Projects
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Real world jobs 
			                    </li>
			                  </ul>
			                </div>
			                <div className="col-sm-7">
			                  <ul className="single-list-wrap">
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Built 1000+ careers
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> 100% immediate placement
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Built for the graphics industry
			                    </li>
			                  </ul>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV2