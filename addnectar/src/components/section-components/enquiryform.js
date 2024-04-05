import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

export default function Enquiry () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (key == '0') {
      document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">CAPTCHA is mandatory</span>';
    }
    else {
    var templateParams = {
      'name': form.current.elements.name.value,
      'contact': form.current.elements.contact.value,
      'message': form.current.elements.message.value,
      'g-recaptcha-response': key,
    };
    emailjs.sendForm('service_to9yc5k', 'template_nb76kdr', form.current, '5u_ErxPJLrp-E8yXm')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        if (response.status == 200) {
          Swal.fire({  
            icon: "success",
            showConfirmButton: false,
            showCloseButton: false,
            html: `
              <div>
                <p>Thank you for your enquiry ! </p>
                <p>We will get back to you by next working day.</p>
                <br></br>
                <a href='/'><button class="btn btn-base">OK</button><a>
              </div>`
          }); 
        }
        else {
          Swal.fire({  
            icon: "warning",
            showConfirmButton: false,
            showCloseButton: false,
            html: `
              <div>
                <p>Something went wrong. Please contact us on +918108167706</p>
                <a href='/'><button class="btn btn-base">OK</button><a>
              </div>`
          }); 
        }
      })
      .catch((err) => {
        console.log('FAILED...', err);
        Swal.fire({  
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: false,
          html: `
            <div>
              <p>Something went wrong. Please contact us on +919137423179</p>
              <a href='/'><button class="btn btn-base">OK</button><a>
            </div>`
        }); 
      });
      // e.target.reset();
    }
  };
  
  const [key, setKey] = useState('1');
  function onChange(value) {
    setKey(value);
  }

  return (
    <form className="contact-form-inner mt-mn-200 style-shadow" ref={form} onSubmit={sendEmail}>
        <div className="section-title">
          <h2 className="title">Enquire Now</h2>
          <p>Fill the form below to get a response on your questions about our courses by next working day.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="single-input-inner">
              <input type="text" name='name' placeholder="Full Name" required/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-input-inner">
              <input type="text" name='contact' placeholder="Phone Number" required/>
            </div>
          </div>
          <div className="col-12">
            <div className="single-input-inner" style={{marginBottom: '12px'}}>
              <textarea placeholder="Your Message" name='message' defaultValue={""} required/>
            </div>
          </div>
        </div>
        <div id="g-recaptcha-error"></div>
        <ReCAPTCHA
        sitekey="6Lc9o74eAAAAALkZa8J587QOVzZ4J2elDNrs3c5Y"
        onChange={onChange}/>
        <div className="col-sm-6 text-sm-right" style={{ display: "flex" , marginTop: '25px', paddingLeft: '0px'}}>
              <button className="btn btn-base" type="submit" style={{ justifyContent: 'flex-end'}} >Send Message</button>
        </div>
      </form>
  );
};