import React from 'react';
import './HomeCard.css';

export default function HomeCard(props) {
  // destructure here
  const {
    home_address,
    home_type,
    home_price,
    sale_type,
    bedrooms,
    bathrooms,
    square_footage,
    image,
    createdAt,
    updatedAt,
  } = props.home;
  console.log(props);
  return (
    <div className='card-container'>
      <img className='home-image' src={image} alt='' />
      <h2>${home_price}</h2>
      <span>
        {bedrooms} bd | {bathrooms} ba |{square_footage} sqft - {home_type}
        {sale_type}
      </span>
      <p>{home_address}</p>
      <p>Posted at: {createdAt}</p>
      <p>Last updated: {updatedAt}</p>
    </div>
  );
}
