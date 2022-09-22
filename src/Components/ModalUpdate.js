import React, { useRef } from 'react';
import './ModalAdd.css';
import UpdateForm from './UpdateForm';
import axios from 'axios';

export default function ModalUpdate({
  showModal,
  setShowModal,
  openModal,
  getHomes,
  home,
}) {
  function updateHome(obj) {
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

    console.log(home);

    axios
      .put(`/homes/${home.id}`, {
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

  //   axios
  //     .post('/homes', {
  //       home_address: address,
  //       home_price: price,
  //       home_type: homeType,
  //       sale_type: saleType,
  //       bedrooms,
  //       bathrooms,
  //       square_footage: squareFootage,
  //       image,
  //     })
  //     .then(() => {
  //       getHomes();

  //       openModal();
  //     })
  //     .catch((err) => console.error(err));
  // }

  const submitRef = useRef();

  return (
    <>
      <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='titleCloseBtn'>
            <button onClick={openModal}>X</button>
          </div>
          <div className='title'>
            <h1>What would you like to change about this home?</h1>
          </div>
          <div className='body'>
            <UpdateForm
              home={home}
              updateHome={updateHome}
              submitRef={submitRef}
            />
          </div>
          <div className='footer'>
            <button onClick={openModal} id='cancelBtn'>
              Cancel
            </button>
            <button onClick={() => submitRef.current.click()}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
