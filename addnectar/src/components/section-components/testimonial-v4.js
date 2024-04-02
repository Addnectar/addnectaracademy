import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="pricing-area pd-top-150 pd-bottom-120 text-center">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-7 col-md-11">
			        <div className="section-title text-center">
			          <h6 className="sub-title double-line">Student Testimonials</h6>
			          <h2 className="title">What our students say </h2>
			        </div>
			      </div>
			    </div>
			    <div className="testimonial-slider-2 owl-carousel">
			      <div className="item">
			        <div className="single-testimonial-inner">
			          <span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
			          <p>I completed my course from Addenctar Academy & now I'm working as Graphic Designer in Addnectar Solutions</p>
					  <div className="media testimonial-author">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/testimonial/kirti.jpg"} alt="img" />
			            </div>
			            <div className="media-body align-self-center">
			              <h6>Kirti Shinge</h6>
			              <p>Student </p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-testimonial-inner">
			          <span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
			          <p>After learning Corel and photoshop the only jobs i did was like DTP but I now have industry exposure by learning how a graphics studio works.</p>
			          <div className="media testimonial-author">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/testimonial/sahil.jpg"} alt="img" />
			            </div>
			            <div className="media-body align-self-center">
			              <h6>Sahil Kalambate</h6>
			              <p>Student</p>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="item">
			        <div className="single-testimonial-inner">
			          <span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
			          <p>I am really happy and excited about my new job and this course from Addnectar Academy. I got to start the job within a week of getting certificate.</p>
			          <div className="media testimonial-author">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/testimonial/Aniruddha.jpg"} alt="img" />
			            </div>
			            <div className="media-body align-self-center">
			              <h6>Aniruddha Ghogale</h6>
			              <p>Student</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default TestimonialV4