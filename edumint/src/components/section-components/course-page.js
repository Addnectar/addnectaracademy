import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CoursePage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="blog-area pd-top-120 pd-bottom-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-8 order-lg-12">
			        <div className="row go-top">
			          <div className="col-md-6">
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
			          <div className="col-md-6">
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
			          <div className="col-md-6">
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
			                    <div className="col-lg-6">
			                      <div className="price">
			                        Price: <span>$74.00</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="col-md-6">
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
			          <div className="col-md-6">
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
			          <div className="col-md-6">
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
			          <div className="col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/7.png"} alt="img" />
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
			          <div className="col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/8.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                  
			                  <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-lg-6">
			                      <div className="price">
			                        Price: <span>$74.00</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        <nav className="td-page-navigation">
			          <ul className="pagination">
			            <li className="pagination-arrow"><Link to="#"><i className="fa fa-angle-double-left" /></Link></li>
			            <li><Link to="#">1</Link></li>
			            <li><Link className="active" to="#">2</Link></li>
			            <li><Link to="#">...</Link></li>
			            <li><Link to="#">3</Link></li>
			            <li className="pagination-arrow"><Link to="#"><i className="fa fa-angle-double-right" /></Link></li>
			          </ul>
			        </nav>
			      </div>
			      <div className="col-lg-4 order-lg-1 col-12">
			        <div className="td-sidebar mt-5 mt-lg-0">
			          <div className="widget widget_search_course">    
			            <h4 className="widget-title">Search</h4>                               
			            <form className="search-form single-input-inner">
			              <input type="text" placeholder="Search here" />
			              <button className="btn btn-base w-100 mt-3" type="submit"><i className="fa fa-search" /> SEARCH</button>
			            </form>
			          </div> 
			          <div className="widget widget_catagory">
			            <h4 className="widget-title">Catagory</h4>                                 
			            <ul className="catagory-items go-top">
			              <li><Link to="/blog-details">Tempor lorem interdum <i className="fa fa-caret-right" /></Link></li>
			              <li><Link to="/blog-details">Auctor mattis lacus  <i className="fa fa-caret-right" /></Link></li>
			              <li><Link to="/blog-details">Dolor proin  <i className="fa fa-caret-right" /></Link></li>
			              <li><Link to="/blog-details">Pharetra amet <i className="fa fa-caret-right" /></Link></li>
			            </ul>
			          </div>  
			          <div className="widget widget_checkbox_list">
			            <h4 className="widget-title">Price</h4> 
			            <label className="single-checkbox">
			              <input type="checkbox" defaultChecked="checked" />
			              <span className="checkmark" />
			              Free Courses
			            </label> 
			            <label className="single-checkbox">
			              <input type="checkbox" />
			              <span className="checkmark" />
			              Paid Courses
			            </label> 
			            <label className="single-checkbox">
			              <input type="checkbox" />
			              <span className="checkmark" />
			              Only Subscription
			            </label>  
			          </div> 
			          <div className="widget widget_checkbox_list">
			            <h4 className="widget-title">Level</h4> 
			            <label className="single-checkbox">
			              <input type="checkbox" defaultChecked="checked" />
			              <span className="checkmark" />
			              Beginner
			            </label> 
			            <label className="single-checkbox">
			              <input type="checkbox" />
			              <span className="checkmark" />
			              Intermediate
			            </label> 
			            <label className="single-checkbox">
			              <input type="checkbox" />
			              <span className="checkmark" />
			              Advanced
			            </label>  
			          </div> 
			          <div className="widget widget_tags mb-0">
			            <h4 className="widget-title">Tags</h4>
			            <div className="tagcloud go-top">
			              <Link to="blog-details">Art</Link>
			              <Link to="blog-details">Creative</Link>
			              <Link to="blog-details">Article</Link>
			              <Link to="blog-details">Designer</Link>
			              <Link to="blog-details">Portfolio</Link>
			              <Link to="blog-details">Project</Link>
			              <Link to="blog-details">Personal</Link>
			              <Link to="blog-details">Landing</Link>
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