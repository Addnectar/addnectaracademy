import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="testimonial-area pd-top-100 pd-bottom-100">
			  <div className="container">
			    <div className="testimonial-area-inner bg-cover" style={{backgroundImage: 'url("'+publicUrl+'assets/img/other/2.png")'}}>
			      <img className="testimonial-right-img" src={publicUrl+"assets/img/other/3.png"} alt="img" />
			      <div className="testimonial-slider owl-carousel">
			        <div className="item">
			          <div className="single-testimonial-inner style-white">
			            <span className="testimonial-quote"><i className="fa fa-quote-left" /></span>
			            <p className="mb-4">Not only did they teach me graphic design but I got to work on projects that were part of customer real work.</p>
			            <div className="media testimonial-author">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/author/1.png"} alt="img" />
			                <i className="fa fa-quote-left" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6>Eugene Freeman</h6>
			                <p>Tincidunt</p>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="item">
			          <div className="single-testimonial-inner style-white">
			            <span className="testimonial-quote"><i className="fa fa-quote-left" /></span>
			            <p className="mb-4">After learning Corel and photoshop the only jobs i did was like DTP but I now have industry exposure by learning how a graphics studio works.</p>
			            <div className="media testimonial-author">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/author/2.png"} alt="img" />
			                <i className="fa fa-quote-left" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6>Jaction Freeman</h6>
			                <p>Tincidunt</p>
			              </div>
			            </div>
			          </div>
			        </div>
					<div className="item">
			          <div className="single-testimonial-inner style-white">
			            <span className="testimonial-quote"><i className="fa fa-quote-left" /></span>
			            <p className="mb-4">I am really happy and excited about my new job and this course from Addnectar Academy. I got to start the job within a week of getting certificate.</p>
			            <div className="media testimonial-author">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/author/2.png"} alt="img" />
			                <i className="fa fa-quote-left" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6>Jaction Freeman</h6>
			                <p>Tincidunt</p>
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

export default Testimonial