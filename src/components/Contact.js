import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [emailInfo, setEmailInfo] = useState({
    userName: '',
    userEmail: '',
    userSubject: '',
    userMessage: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmailInfo({ ...emailInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init('user_xKrhJNseTz1Ikv2c4W35i');
    emailjs
      .sendForm(
        'service_ux3dwhc',
        'template_k2rqxts',
        e.target,
        'user_xKrhJNseTz1Ikv2c4W35i'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmailInfo({
      userName: '',
      userEmail: '',
      userSubject: '',
      userMessage: '',
    });
  };

  return (
    <section className='home-container'>
      <div className='banner'>contact</div>
      <form onSubmit={handleSubmit} className='form'>
        <section className='inputs'>
          <section className='form-control'>
            <label htmlFor='userName' className='form-label'>
              name:
            </label>
            <input
              type='text'
              id='userName'
              name='userName'
              value={emailInfo.userName}
              onChange={handleChange}
              placeholder='John Smith'
            />
          </section>
          <section className='form-control'>
            <label htmlFor='userEmail' className='form-label'>
              email address:
            </label>
            <input
              type='email'
              id='userEmail'
              name='userEmail'
              value={emailInfo.userEmail}
              onChange={handleChange}
              placeholder='johnsmith@email.com'
            />
          </section>
          <section className='form-control'>
            <label htmlFor='userSubject' className='form-label'>
              subject:
            </label>
            <input
              type='text'
              id='userSubject'
              name='userSubject'
              value={emailInfo.userSubject}
              onChange={handleChange}
              placeholder='Lets build a website'
            />
          </section>
          <section className='form-control'>
            <label htmlFor='userMessage' className='form-label'>
              message:
            </label>
            <textarea
              id='userMessage'
              name='userMessage'
              value={emailInfo.userMessage}
              onChange={handleChange}
              placeholder='Message here'
            />
          </section>
        </section>
        <button type='submit' className='submit-btn nav-item'>
          send email
        </button>
      </form>
    </section>
  );
};

export default Contact;
