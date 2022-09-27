import React, { useState } from 'react';
import './HomeCard.css';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

import { AiFillEdit, AiFillHeart, AiFillDelete } from 'react-icons/ai';

export default function HomeCard(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [like, setLike] = useState(false);

  const handleToggle = () => {
    setLike(!like);
  };

  function openModal() {
    setShowModal(!showModal);
  }
  function openModalDelete() {
    setShowModalDelete(!showModalDelete);
  }
  // destructure here
  const { deleteHome, getHomes } = props;
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

  return (
    <div className='card'>
      <div className='card-container'>
        <span>
          <AiFillHeart
            className={like ? 'like' : null}
            type='checkbox'
            size='25px'
            // className='heart'
            onClick={handleToggle}
          />

          <AiFillEdit className='update-icon' size='25px' onClick={openModal} />

          {showModal ? (
            <ModalUpdate
              home={props.home}
              getHomes={getHomes}
              showModal={showModal}
              setShowModal={setShowModal}
              openModal={openModal}
            />
          ) : null}
          <AiFillDelete
            className='delete-icon'
            size='25px'
            onClick={openModalDelete}
          />
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
        </span>

        <img className='home-image' src={image} alt='' />

        <strong>
          <h2>${home_price}</h2>
        </strong>
        <div className='home-info'>
          <span>
            {bedrooms} bd | {bathrooms} ba | {square_footage} sqft - {home_type}{' '}
            {sale_type}
          </span>
          <p>{home_address}</p>
          <p>Posted at: {createdAt}</p>
          <p>Last updated: {updatedAt}</p>
        </div>
      </div>
    </div>
  );
}
