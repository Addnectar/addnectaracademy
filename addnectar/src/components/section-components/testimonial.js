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
			                <img src={publicUrl+"assets/img/author/Abhijeet.jpg"} alt="img" />
			                <i className="fa fa-quote-left" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6>Abhijeet Birwadkar</h6>
			                <p>Student</p>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="item">
			          <div className="single-testimonial-inner style-white">
			            <span className="testimonial-quote"><i className="fa fa-quote-left" /></span>
			            <p className="mb-4">I absolutely loved the teaching from the start till the end. The course on the whole was well-structured focusing on real-world .
						 I also got a job after completing the course at Addnectar Solutions as Graphic Designer</p>
			            <div className="media testimonial-author">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/author/Bharat.jpg"} alt="img" />
			                <i className="fa fa-quote-left" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6>Bharat Gupta</h6>
			                <p>Student</p>
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
			                <img src={publicUrl+"assets/img/author/aashish.jpg"} alt="img" />
			                <i className="fa fa-quote-left" />
			              </div>
			              <div className="media-body align-self-center">
			                <h6>Ashish Khandekar</h6>
			                <p>Student</p>
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