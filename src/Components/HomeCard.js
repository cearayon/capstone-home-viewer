import React, { useState } from 'react';
import './HomeCard.css';
import Modal from './Modal';
import EditForm from './EditForm';

export default function HomeCard(props) {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(!showModal);
  }
  // destructure here
  const { deleteHome, updateHome, getHomes } = props;
  const {
    id,
    home_address,
    home_type,
    home_price,
    sale_type,
    bedrooms,
    bathrooms,
    square_footage,
    image,
    created_at,
    updated_at,
  } = props.home;

  return (
    <div className='card-container'>
      <span>
        <img className='home-image' src={image} alt='' />
        <button onClick={() => deleteHome(id)}> DELETE </button>
        <button onClick={openModal}>I'm a modal</button>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          openModal={openModal}
        />
      </span>
      <h2>${home_price}</h2>
      <span>
        {bedrooms} bd | {bathrooms} ba | {square_footage} sqft - {home_type}{' '}
        {sale_type}
      </span>
      <p>{home_address}</p>
      <p>Posted at: {created_at}</p>
      <p>Last updated: {updated_at}</p>
      <EditForm home={props.home} getHomes={getHomes} />
    </div>
  );
}
