import React, { useState, useRef } from 'react'
import Axios from 'axios'
import Notification from './Notification'
import emailjs from 'emailjs-com'

function Contact() {

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [emails, setEmails] = useState([])
  const [notification, setNotification] = useState('')
  const [warning, setWarning] = useState(false)

  const form = useRef()

  const isValidEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const onHandleSubmit = event => {
    event.preventDefault();
    if(email !== '' && subject !== '' && message !== '') {
      if(isValidEmail(email)) {
        try {
          // Axios.post('http://localhost:3001/contact', {
          //   email: email, subject: subject, message: message,
          // })
          // .then(response => {
          //   if(typeof response.data.affectedRows === 'undefined') {
          //     setWarning(true)
          //     setNotification('Something went wrong while sending your message, Please try again later!')
          //   }
          //   else {
              emailjs.sendForm('service_csw8p1s', 'template_dvuy52t', form.current, 'user_mr2EBa6zyyrUmjvi45i1C')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              setEmails([
                ...emails, {email: email, subject: subject, message: message}, 
              ])
              setWarning(false)
              setNotification('Your message is sent successfully!')  
        //     }
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   })
        } 
        catch (error) {
          console.log(error)
          setWarning(true)
          setNotification('Something went wrong while sending your message, Please try again later!')
        }
      }
      else {
        setWarning(true)
        setNotification('The Email Address is incorrect, please check it!')
      }
    }
    else {
      setWarning(true)
      setNotification('Please fill all the fieds!')
    }
  }

  return (
    <div className="contact">
      <h1>Contact us</h1>
      <div className="form">
        <Notification message={notification} warning={warning} />
        <form ref={form} onSubmit={onHandleSubmit}>
          <input type="email" name="email" 
            className="form-control"
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Your Email here!"
            required
          />
          <input type="text" name="subject"
            className="form-control"
            onChange={(e) => setSubject(e.target.value)} 
            placeholder="Your Subject here!"
            required
          />
          <textarea name="message" 
            className="form-control"
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Your Message here!"
            required
          />
          <div className="d-grid gap-2">
            <button className="btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
