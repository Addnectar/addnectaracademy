import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Privacy extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div>
			  <div className="contact-list pd-top-120 pd-bottom-90">
			    <div className="container">
			        <div className="row justify-content-left">
                    <div>
                        <h5>Privacy Notice</h5>
                            <span>This privacy notice discloses the privacy practices for (www.addnectaracademy.com). This privacy notice applies solely to information collected by this website. It will notify you of the following:</span>
                            <ul style={{marginTop: '1em'}}>
                                <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                                <li>What choices are available to you regarding the use of your data.</li>
                                <li>The security procedures in place to protect the misuse of your information.</li>
                                <li>How you can correct any inaccuracies in the information.</li>
                            </ul>
                    </div>
                    <div>
                        <h5>Information Collection, Use, and Sharing</h5>
                            <p>
                                We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. 
                                We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order. 
                                Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
                            </p>
                    </div>
                    <div>
                        <h5>Your Access to and Control Over Information</h5>
                            <span>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website</span>
                            <ul style={{marginTop: '1em'}}>
                                <li>See what data we have about you, if any.</li>
                                <li>Change/correct any data we have about you</li>
                                <li>Have us delete any data we have about you.</li>
                                <li>Express any concern you have about our use of your data.</li>
                            </ul>
                    </div>
                    <div>
                        <h5>Security</h5>
                            <p>
                                We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. 
                                Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page. 
                                While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. 
                                The computers/servers in which we store personally identifiable information are kept in a secure environment.
                            </p>
                            <p>
                            If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at +91 8108167706 or via email at info@addnectaracademy.com.
                            </p>
                    </div>
                    <div>
                        <h5>Registration</h5>
                            <p>
                            In order to use this website, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address). This information is used to contact you about the products/services on our site in which you have expressed interest. 
                            At your option, you may also provide demographic information (such as gender or age) about yourself, but it is not required.
                            </p>
                    </div>
                    <div>
                        <h5>Orders</h5>
                            <p>
                            We request information from you on our order form. To buy from us, you must provide contact information (like name and shipping address) and financial information (like credit card number, expiration date). This information is used for billing purposes and to fill your orders. 
                            If we have trouble processing an order, we'll use this information to contact you.
                            </p>
                    </div>
                    <div>
                        <h5>Links</h5>
                            <p>
                            This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                            </p>
                    </div>
                    <div>
                        <h5>Cookies</h5>
                            <p>
                            We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, 
                            you would not have to log in a password more than once, thereby saving time while on our site. Cookies can also enable us to track and target the interests of our users to enhance the experience on our site. Usage of a cookie is in no way linked to any personally identifiable information on our site.
                            </p>
                    </div>
                    <div>
                        <h5>Surveys & Contests</h5>
                            <p>
                            From time-to-time our site requests information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. 
                            Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes. 
                            Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.
                            </p>
                    </div>

			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Privacy




// 

// </ul>  