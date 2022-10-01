import React, { useState } from 'react';
import './AddForm.css';
import axios from 'axios';
export default function AddForm(props) {
  const { createHome, submitRef } = props;

  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState('');
  const [homeType, setHomeType] = useState('');
  const [saleType, setSaleType] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [squareFootage, setSquareFootage] = useState(0);
  const [image, setImage] = useState('');

  // function createHome() {
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
  //     .then(getHomes)
  //     .catch((err) => console.error(err));
  // }

  return (
    <>
      <form
        className='form-container'
        onSubmit={(e) => {
          e.preventDefault();
          createHome({
            address,
            price,
            homeType,
            saleType,
            bedrooms,
            bathrooms,
            squareFootage,
            image,
          });
          alert('Home added!');
        }}
      >
        <label htmlFor='price'></label>
        <input
          name='price'
          onChange={(e) => setPrice(e.target.value)}
          autoFocus
          id='priceInput'
          type='number'
          placeholder='Price'
          required
        />
        <label htmlFor='addUser'></label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          id='addressInput'
          type='text'
          placeholder='Address'
          required
        />
        <input
          onChange={(e) => setHomeType(e.target.value)}
          id='typeInput'
          type='text'
          placeholder='Home Type'
          required
        />
        <input
          onChange={(e) => setSaleType(e.target.value)}
          id='saleInput'
          type='text'
          placeholder='Sale Type'
          required
        />
        <input
          onChange={(e) => setBedrooms(e.target.value)}
          id='bedroomsInput'
          type='number'
          placeholder='Bedrooms'
          required
        />
        <input
          onChange={(e) => setBathrooms(e.target.value)}
          id='bathroomsInput'
          type='number'
          placeholder='Bathrooms'
          required
        />
        <input
          onChange={(e) => setSquareFootage(e.target.value)}
          id='priceInput'
          type='number'
          placeholder='Square Footage'
          required
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          id='imageInput'
          type='text'
          placeholder='Image URL'
          required
        />
        <br />
        <button ref={submitRef} type='submit' style={{ display: 'none' }} />
      </form>
    </>
  );
}
