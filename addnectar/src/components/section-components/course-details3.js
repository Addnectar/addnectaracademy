import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CourseDetailsSection3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="course-single-area pd-top-120 pd-bottom-90">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-9">
			        <div className="course-course-detaila-inner">
			          <div className="details-inner">
			            <h2 className="title"><Link to="#">Professional Diploma in Graphics Design</Link></h2>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/3.1.png"} alt="img" />
			          </div>
					  <h3>Description</h3>
			          <div className="tab-content" id="myTabContent">
			            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
			              <div className="course-details-content">
			                <p><strong>Course duration:</strong> 2 hours per day</p>
							<p><strong>Course Sessions:</strong> 32</p>
							<p>Take your basics knowledge forward and understand deeper concepts with courses specialized for every graphics career.</p>
							<p>Designed for working professional who have knowledge of softwares but need concepts and understand of the industry to advance their careers.</p>
							<p>Get hand holded and guided by expert trainers who have been training in the industry for over a decade.</p>
							<p><strong>What will you learn</strong></p>
							<div className="row pt-4">
			                  <div className="col-sm-6">
			                    <ul className="single-list-wrap">
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Revisiting basics of graphics
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Visual identity graphic design
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Graphic design for marketing & advertising
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> User interface graphic design
			                      </li>
			                    </ul>
			                  </div>
			                  <div className="col-sm-6 mt-3 mt-sm-0">
			                    <ul className="single-list-wrap">
									<li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Publication graphic design
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Packaging graphic design
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Environmental graphic design
			                      </li>
								  <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" /> Story telling with art and illustration
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

export default CourseDetailsSection3