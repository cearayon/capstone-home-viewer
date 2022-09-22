import React, { useState } from 'react';
import './HomeCard.css';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

export default function HomeCard(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  function openModal() {
    setShowModal(!showModal);
  }
  function openModalDelete() {
    setShowModalDelete(!showModalDelete);
  }
  // destructure here
  const { deleteHome, getHomes } = props;
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
        <button onClick={openModalDelete}>DELETE v2</button>
        {showModalDelete ? (
          <ModalDelete
            home={props.home}
            getHomes={getHomes}
            showModal={showModal}
            setShowModalDelete={setShowModalDelete}
            openModalDelete={openModalDelete}
            deleteHome={deleteHome}
          />
        ) : null}
        <button onClick={() => deleteHome(id)}> DELETE </button>
        <button onClick={openModal}>UPDATE</button>
        {showModal ? (
          <ModalUpdate
            home={props.home}
            getHomes={getHomes}
            showModal={showModal}
            setShowModal={setShowModal}
            openModal={openModal}
          />
        ) : null}
      </span>
      <h2>${home_price}</h2>
      <span>
        {bedrooms} bd | {bathrooms} ba | {square_footage} sqft - {home_type}{' '}
        {sale_type}
      </span>
      <p>{home_address}</p>
      <p>Posted at: {created_at}</p>
      <p>Last updated: {updated_at}</p>
    </div>
  );
}
