import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import Course from './components/course';
import CourseDetails1 from './components/course-details1';
import CourseDetails2 from './components/course-details2';
import CourseDetails3 from './components/course-details3';
import About from './components/about';
import SignUp from './components/sign-up';
import Contact from './components/contact';
import PrivacyPage from './components/privacy';




class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
                        <Route exact path="/" component={HomeV1} />
                        <Route path="/courses" component={Course} />
                        <Route path="/course-details-1" component={CourseDetails1} />
                        <Route path="/course-details-2" component={CourseDetails2} />
                        <Route path="/course-details-3" component={CourseDetails3} />
                        <Route path="/aboutus" component={About} />
                        <Route path="/enquiry" component={SignUp} />
                        <Route path="/contactus" component={Contact} />
                        <Route path="/privacy-policy" component={PrivacyPage} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('edumint'));
