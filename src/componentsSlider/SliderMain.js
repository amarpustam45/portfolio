import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaMapPin, FaQuoteRight } from 'react-icons/fa';
import data from './data';
import '../styles/slider.css';

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);

  const checkValue = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  useEffect(() => {
    let slider = setInterval(() => {
      incrementValue();
    }, 3000);
    return () => clearInterval(slider);
  }, [value]);

  const incrementValue = () => {
    setValue((prevValue) => {
      let newValue = prevValue + 1;
      return checkValue(newValue);
    });
  };
  const decrementValue = () => {
    setValue((prevValue) => {
      let newValue = prevValue - 1;
      return checkValue(newValue);
    });
  };

  const { image, name, title, quote } = people[value];
  console.log(people);
  return (
    <div className='container'>
      <section className='left'>
        <FiChevronLeft
          className='click-left'
          onClick={decrementValue}
        ></FiChevronLeft>
      </section>

      <section className='info-container'>
        <h1 className='title'>/reviews</h1>
        <img className='image' src={image} alt={name} />
        <h2 className='name'>{name}</h2>
        <h2 className='job-title'>{title}</h2>
        <p className='quote'>{quote}</p>
        <FaQuoteRight className='quote-icon'></FaQuoteRight>
      </section>

      <section className='right'>
        <FiChevronRight
          className='click-right'
          onClick={incrementValue}
        ></FiChevronRight>
      </section>
    </div>
  );
}

export default App;
