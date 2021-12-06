import React from 'react';

import './Restaurant.css';


const Restaurant = ({ data }) => {

  const titles = data.categories.map((c) => {
    return <span>{c.title} </span>
  });

  console.log(data.categories)

  return (
    <div className='Restaurant'>
      <div className='Restaurant-image-wrapper'>
        <img
          className='Restaurant-image'
          src={data.image_url}
          alt={data.name}
        />
      </div>
      <div className='Restaurant-info-container'>
        <div className='Restaurant-info'>
          <a href={data.url} className='Restaurant-link'>
            {data.shortDescription}
          </a>
          <p className='Restaurant-name'>{data.name}</p>
        </div>
        <div className='Restaurant-reviews'>
          <img
            src='./images/Star.png'
            alt='star for ratings'
            className='Restaurant-star-image'
          />
          <div className='Restaurant-rating'>{data.rating}</div>
          <div className='Restaurant-reviews'>{data.review_count} reviews</div>
        </div>
        <div className='Restaurant-categories'>
          {titles} 
        </div>
      </div>
      <div className="Restaurant-price">
        {data.price}
      </div>
    </div>
  );
}

export default Restaurant;
