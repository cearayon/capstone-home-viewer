import React, { useState } from 'react';
import './ModalAdd.css';
import AddForm from './AddForm';
import axios from 'axios';

export default function ModalAdd({
  showModal,
  setShowModal,
  openModal,
  getHomes,
}) {
  function createHome(obj) {
    const {
      address,
      price,
      homeType,
      saleType,
      bedrooms,
      bathrooms,
      squareFootage,
      image,
    } = obj;
    axios
      .post('/homes', {
        home_address: address,
        home_price: price,
        home_type: homeType,
        sale_type: saleType,
        bedrooms,
        bathrooms,
        square_footage: squareFootage,
        image,
      })
      .then(() => {
        getHomes();

        openModal();
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      {showModal ? (
        <div className='modalBackground'>
          <div className='modalContainer'>
            <div className='titleCloseBtn'>
              <button onClick={openModal}>X</button>
            </div>
            <div className='title'>
              <h1>Tell us more about your home!</h1>
            </div>
            <div className='body'>
              <AddForm createHome={createHome} />
            </div>
            <div className='footer'>
              <button onClick={openModal} id='cancelBtn'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
