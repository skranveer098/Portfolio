import React, { useState } from 'react';
import './Contact.css';
import contact from './phots/depositphotos_74468913-stock-photo-contact-us-icons-on-cubes.jpg';
import 'react-toastify/dist/ReactToastify.css';

const Contact = (props) => {
  const [userMsg, setUserMsg] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputs = (event) => {
    setUserMsg({ ...userMsg, [event.target.name]: event.target.value });
  };
  return (
    <div className="flexabout" style={{backgroundColor:"rgb(34,28,28)"}}>
      
      <div className="contain" >
      <section className="contact_page_section" id="contact_page" style={{height:"100vh"}}>
        
      <div className="contact_section">
      <h1 id="hskills" style={{ color: "white" }}>Skills</h1>

        <div className="contact_container">
          <div className="form_container_left">
            <div className="user_form">
              <form
                className="user_message_form"
                action="https://formspree.io/f/xvoezkal"
                method="post"
              >
                <h3>
                  Get in <span> Touch </span>
                </h3>
                <p>I'm open for any suggestions</p>
                <div className="name_val">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userMsg.name}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </div>
                <div className="username_val">
                  <label htmlFor="name">Email-id</label>
                  <input
                    type="email"
                    name="email"
                    value={userMsg.email}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </div>
                <div className="username_val">
                  <label htmlFor="name">Phone No</label>
                  <input
                    type="Phone"
                    name="phone"
                    value={userMsg.phone}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </div>
                <div className="user_msg">
                  <label htmlFor="msg">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    id="user_text_area"
                    cols="30"
                    rows="6"
                    value={userMsg.message}
                    onChange={handleInputs}
                  ></textarea>
                </div>
                <div className="user_send_msg_button">
                  <button className="submit_msg" id="user_msg_btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <img
            src={contact}
            className="form_container_right"
            alt="contact images"
          ></img>
        </div>
      </div>
    </section>
      </div>
    </div>
  )
}

export default Contact;
