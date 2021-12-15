import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [emailInfo, setEmailInfo] = useState({
    userName: '',
    userEmail: '',
    userSubject: '',
    userMessage: '',
  });

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
  };

  return (
    <section className='home-container'>
      <div className='banner'>contact</div>
      <form onSubmit={handleSubmit} className='form'>
        <section className='form-control'>
          <label htmlFor='userName'>name:</label>
          <input type='text' id='userName' name='userName' />
        </section>
        <section className='form-control'>
          <label htmlFor='userEmail'>email address:</label>
          <input type='email' id='userEmail' name='userEmail' />
        </section>
        <section className='form-control'>
          <label htmlFor='userSubject'>subject:</label>
          <input type='text' id='userSubject' name='userSubject' />
        </section>
        <section className='form-control'>
          <label htmlFor='userMessage'>message:</label>
          <textarea id='userMessage' name='userMessage' />
        </section>

        <button type='submit'>send email</button>
      </form>
    </section>
  );
};

export default Contact;
