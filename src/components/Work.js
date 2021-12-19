import React, { useState } from 'react';
import data from './data';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import '../styles/Work.css';

const Work = () => {
  const [workData, setWorkData] = useState(data);

  return (
    <section className='work-container'>
      <div className='banner work-banner'>my work</div>
      <section className='work-center'>
        {workData.map((site, siteIndex) => {
          const { id, siteName, image, url, description, techDesc } = site;
          console.log(image);
          return (
            <article key={id}>
              <a href={url} target='_blank'>
                <img src={image} alt={siteName} />
              </a>
              <p>{siteName}</p>
            </article>
          );
        })}
      </section>
      <button className='prev'>
        <FaAngleDoubleLeft />
      </button>
      <button className='next'>
        <FaAngleDoubleRight />
      </button>
    </section>
  );
};

export default Work;
