import React, { useState, useEffect } from 'react';
import review from './data/review'; 
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';  
import './Review.css';

const Reviews = () => {

    const [people] = useState(review);
    const [index,setIndex] = useState(0);
    useEffect(() => {
        const lastIndex = people.length -1;
        if (index < 0){
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index,people]);
    useEffect(() => {
     let slider =  setInterval(() => {
           setIndex(index + 1);
       }, 3000);
       return () => clearInterval(slider);
    }, [index]);
    return <section className='section'>
    <div className='title'>
      <h2>
        <span>
          /
        </span>reviews
      </h2>
    </div>
    <div className='section-center'>
    {people.map((person, peopleIndex)=> {
      const { id, image, name, title, quote } = person;
      // more info coming up

      let position = 'nextSlide';
      if (peopleIndex === index) {
          position = 'activeSlide';
      }
      if (peopleIndex === index - 1 || (index === 0 && peopleIndex === people.length -1)) {
          position = 'lastSlide';
      }
      return (
        <article key={id} className={position}>
        <img src={image} alt={name} className='person-img'></img>
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='text'>{quote}</p>
        <FaQuoteRight className='icon' />

        </article>
      )
    })}
    <button className='prev' onClick={() => setIndex(index -1)}><FiChevronLeft /></button>
    <button className='next' onClick={() => setIndex(index +1)}><FiChevronRight /></button>
    </div>
  </section>
}

export default Reviews
