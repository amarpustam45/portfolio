import React, { useEffect, useState } from 'react';
import data from './data';
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import '../styles/Work.css';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const Work = () => {
  const [workData, setWorkData] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = workData.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, workData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 15000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='work-container'>
      <div className='banner work-banner'>my work</div>
      <section className='all-content'>
        <section className='main-content'>
          {workData.map((site, siteIndex) => {
            const { id, siteName, image, url, description, techDesc } = site;

            let position = 'next-slide';
            if (siteIndex === index) position = 'active-slide';
            if (
              siteIndex === index - 1 ||
              (index === 0 && siteIndex === workData.length - 1)
            )
              position = 'last-slide';

            return (
              <article key={id} className={`card-control ${position}`}>
                <section className='contents'>
                  <img src={image} alt={siteName} />
                  <section className='card-info-container'>
                    <p className='site-name'>{siteName}</p>
                    <p className='site-desc'>{description}</p>
                    <p className='tech-desc'>{techDesc}</p>
                    <a href={url} target='_blank' className='link-to-site'>
                      <div className='nav-item nav-item-link'>
                        <BsBoxArrowInUpRight className='new-tab-icon' />
                        take me there
                      </div>
                    </a>
                  </section>
                </section>
              </article>
            );
          })}
        </section>
        <p className='call-to-action'>
          Like what you see? Get in{' '}
          <NavLink exact to='/contact' className='to-contact nav-item'>
            touch here
          </NavLink>
          <div className='cta'>
            <p className='email-tag'>or send an email: </p>
            <span className='email'>amarpustam@hotmail.com</span>
          </div>
        </p>
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FaAngleDoubleLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FaAngleDoubleRight />
        </button>
      </section>
    </section>
  );
};

export default Work;
