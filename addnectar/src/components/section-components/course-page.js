import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CoursePage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="blog-area pd-top-120 pd-bottom-120">
			  <div className="container">
			  <div className="tab-content go-top" id="myTabContent">
			      <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                  <h6><Link to="/course-details-1">Diploma in Graphics Design Basics</Link></h6>
							  <p>Master the basic concepts and key softwares to get started in your graphics design career.</p>
							  <br></br>
							</div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        <span><Link to="/course-details-1">Know More</Link></span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/2.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                  <h6><Link to="/course-details-2">Advanced Diploma in Graphics Design</Link></h6>
							  <p>Take your basics knowledge forward and understand deeper concepts with courses specialized for every graphics career.</p>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        <span><Link to="/course-details-2">Know More</Link></span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/3.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                  <h6><Link to="/course-details-3">Pro Diploma in Graphics Design</Link></h6>
							  <p>Designed for working professional who have knowledge of softwares but need concepts and understanding of the industry to advance their careers.</p>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        <span><Link to="/course-details-3">Know More</Link></span>
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
			  </div>
			</div>

        }
}

export default CoursePage