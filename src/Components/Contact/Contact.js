
import React, { useRef, useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gmail', 'template_mail', form.current, 'RC-wf5Ybz3QJyTgYz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    
  
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
              
            <div className='left'>
              <div className='box box_shadow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Md Shakib Ahamed</h1>
                  <p>Jr. MERN Stack Developer</p>
                  <p>I am available for  work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +8801303455089</p>
                  <p>Email: shakibshuvo633@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                   <a target="_blank " href="https://www.facebook.com/shakib633"> <button className='btn_shadow'><i className='fab fa-facebook'></i></button></a>
                   <a target="_blank "  href="https://www.instagram.com/s_h_uvo/"> <button className='btn_shadow'><i className="fab fa-instagram"></i></button></a>
                   <a target="_blank "  href="https://github.com/shakib633"> <button className='btn_shadow'> <i target="_blank "className='fab fa-github'></i></button></a>
                   <a  href="https://www.linkedin.com/in/md-shakib-ahamed-1962ba121/"> <button className='btn_shadow'><i className='fab fa-linkedin'></i></button></a>
                   
                  </div>
                </div>
              </div>
            </div>

             <div className='  right ms-5 w-100 '>
             <form ref={form} onSubmit={sendEmail}>

                <input type='text' name='fullname' placeholder='Your Name' required />
                <br></br>
                <input type='number' name='phone' placeholder='Your Phone Number' required />
                <br></br>
                <input type='email' name='email' placeholder='Your Email Address' required />
                <br></br>
                <input type='text' name='message' placeholder="Your message" required />
                <br></br>
                <br></br>
                <input className="btn_shadow fa fa-long-arrow-right" type="submit" value="SEND MESSAGE" />

              
              </form>
             </div>
            </div>
          </div>
    </section>
    </>
  )
}

export default Contact;