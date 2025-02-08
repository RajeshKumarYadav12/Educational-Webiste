import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';

import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { Result } from 'postcss';

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1982df72-d30e-4ec8-bd57-f8d2ac60a637");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'> 
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
        Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" /> Contact@rajesh.com</li>
          <li><img src={phone_icon} alt="" />+9563-456-7890</li>
          <li><img src={location_icon} alt="" /> Mantripukhri, Imphal, Manipur - 795002, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="6" placeholder='Write your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
