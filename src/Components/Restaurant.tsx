import React from 'react';

import './Restaurant.css';

interface dataProps {
  data: {
    name: string;
    shortDescription: string;
    rating: number;
    review_count: number;
    price: string;
    phone: string;
    url: string;
    coordinates: {
      latitude: number;
      longitude: number;
    }
    image_url: string;
    location: {
      city: string;
      country: string;
      address2: string;
      state: string;
      address1: string;
      zip_code: string;
    };
    categories: Array<{
      title: string;
    }>
  }
}

const Restaurant = ({ data }: dataProps) => {
 
  return (
    <div className='Restaurant'>
      <div className='Restaurant-container'>
        <img
          className='Restaurant-image'
          src={data.image_url}
          alt={data.name}
        />
        <div className='Restaurant-info-container'>
          <div className='Restaurant-info'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href={data.url}
              className='Restaurant-link'
            >
              {data.shortDescription}
            </a>
            <p className='Restaurant-name'>{data.name}</p>
          </div>
          <div className='Restaurant-review-container'>
            <img
              src='./images/Star.png'
              alt='star for ratings'
              className='Restaurant-star-image'
            />
            <div className='Restaurant-rating'>{data.rating}</div>
            <div className='Restaurant-reviews'>
              {data.review_count} reviews
            </div>
          </div>
          <div className='Restaurant-categories'>
            Outdoor dining∙Delivery∙Takeout
          </div>
        </div>
      </div>
      <div className='Restaurant-price'>{data.price}</div>
    </div>
  );
}

export default Restaurant;
