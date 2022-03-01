import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CourseFilter extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="course-area pd-top-100 pd-bottom-90">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-8 col-lg-10 col-md-11">
			        <div className="section-title style-white text-center">
			          <h2 className="title">Courses</h2>
			        </div>
			      </div>
			    </div>
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
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
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
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                  <h6><Link to="/course-details-3">Pro Diploma in Graphics Design</Link></h6>
							  <p>Designed for working professional who have knowledge of softwares but need concepts and understand of the industry to advance their careers.</p>
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
			          {/* <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Duis vestibulum elit vel neque pharetra vulputate</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$64.00</span>
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
			                <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Quisque suscipit ipsum est, eu venenatis leo ornare eget</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$34.00</span>
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
			                <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Duis rhoncus dui venenatis consequat porttito</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$55.00</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/3.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$74.00</span>
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
			                <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Duis vestibulum elit vel neque pharetra vulputate</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$64.00</span>
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
			                <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Quisque suscipit ipsum est, eu venenatis leo ornare eget</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$34.00</span>
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
			                <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Duis rhoncus dui venenatis consequat porttito</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$55.00</span>
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
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Fox nymphs grab quick-jived waltz. Brick quiz whangs</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$54.00</span>
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
			                   
			                  <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$54.00</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Duis vestibulum elit vel neque pharetra vulputate</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$64.00</span>
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
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Fox nymphs grab quick-jived waltz. Brick quiz whangs</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$54.00</span>
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
			                <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Quisque suscipit ipsum est, eu venenatis leo ornare eget</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$34.00</span>
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
			                   
			                  <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$54.00</span>
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
			                   
			                  <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$74.00</span>
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
			                <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Duis rhoncus dui venenatis consequat porttito</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$55.00</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/3.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$74.00</span>
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
			                <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Duis rhoncus dui venenatis consequat porttito</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$55.00</span>
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
			                <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Duis vestibulum elit vel neque pharetra vulputate</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$64.00</span>
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
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Fox nymphs grab quick-jived waltz. Brick quiz whangs</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$54.00</span>
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
			                <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                   
			                  <h6><Link to="/course-details">Quisque suscipit ipsum est, eu venenatis leo ornare eget</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$34.00</span>
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
			                   
			                  <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="price">
			                        Price: <span>$54.00</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div> */}
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default CourseFilter