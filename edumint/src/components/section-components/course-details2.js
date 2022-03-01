import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CourseDetailsSection2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="course-single-area pd-top-120 pd-bottom-90">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-10">
			        <div className="course-course-detaila-inner">
			          <div className="details-inner">
			            <h2 className="title"><Link to="#">Advanced Diploma in Graphics Design</Link></h2>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/9.png"} alt="img" />
			          </div>
					  <h3>Description</h3>
			          <div className="tab-content" id="myTabContent">
			            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
			              <div className="course-details-content">
			                <p><strong>Course duration:</strong> 2 hours per day</p>
							<p><strong>Course Sessions:</strong> 64</p>
							<p>Take your basics knowledge forward and understand deeper concepts with courses specialized for every graphics career.</p>
							<p>Learn industry specific workflow, tools and specialize in your carrier path within graphic design</p>
							<p>Get hand holded and guided by expert trainers who have been training in the industry for over a decade.</p>
							<p><strong>What will you learn</strong></p>
							<div className="row pt-4">
			                  <div className="col-sm-6">
			                    <ul className="single-list-wrap">
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Learn and understand color theory
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Convert from raster to vector
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Redraw and tracing using multiple methods
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Understand Graphics resolution
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" />Graphics retouching basics
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Enhancing old photographs
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Visual identity graphic design
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Graphic design for marketing & advertising.
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> User interface graphic design
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Publication graphic design
			                      </li>
			                    </ul>
			                  </div>
			                  <div className="col-sm-6 mt-3 mt-sm-0">
			                    <ul className="single-list-wrap">
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Color correction and more
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Use of vector graphics in print media
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Develop drawing without any fine art knowledge
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Create Logos, Signboard Product Design
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Create Print mediums like Flyers brochures etc. 
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Motion graphics
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Environmental graphic design
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Story telling with art and illustration
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Packaging graphic design.
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
			</div>

        }
}

export default CourseDetailsSection2