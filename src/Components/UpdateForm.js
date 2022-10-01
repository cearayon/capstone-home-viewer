import React, { useState } from 'react';
import './UpdateForm.css';

export default function UpdateForm(props) {
  const { submitRef, updateHome, home } = props;

  const [price, setPrice] = useState(home.home_price);
  const [address, setAddress] = useState(home.home_address);
  const [homeType, setHomeType] = useState(home.home_type);
  const [saleType, setSaleType] = useState(home.sale_type);
  const [bedrooms, setBedrooms] = useState(home.bedrooms);
  const [bathrooms, setBathrooms] = useState(home.bathrooms);
  const [squareFootage, setSquareFootage] = useState(home.square_footage);
  const [image, setImage] = useState(home.image);

  return (
    <>
      <form
        className='update-form'
        onSubmit={(e) => {
          e.preventDefault();
          updateHome({
            address,
            price,
            homeType,
            saleType,
            bedrooms,
            bathrooms,
            squareFootage,
            image,
          });
          alert('Home updated!');
        }}
      >
        <span>
          <label className='update-label' for='Price'>
            Price
          </label>
          <input
            className='update-input'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            autoFocus
            type='number'
            placeholder='Price'
            required
          />
        </span>
        <span>
          <label className='update-label' for='Address'>
            Address
          </label>
          <input
            className='update-input'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoFocus
            type='text'
            placeholder='Address'
            required
          />
        </span>
        <span>
          <label className='update-label' for='Home Type'>
            Home Type
          </label>
          <input
            className='update-input'
            value={homeType}
            onChange={(e) => setHomeType(e.target.value)}
            autoFocus
            type='text'
            placeholder='Home Type'
            required
          />
        </span>
        <span>
          <label className='update-label' for='Sale Type'>
            Sale Type
          </label>
          <input
            className='update-input'
            value={saleType}
            onChange={(e) => setSaleType(e.target.value)}
            autoFocus
            type='text'
            placeholder='Sale Type'
            required
          />
          {/* <button onClick={() => setSaleType('')}></button> */}
        </span>
        <span>
          <label className='update-label' for='Bedrooms'>
            Bedrooms
          </label>
          <input
            className='update-input'
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            autoFocus
            type='number'
            placeholder='Bedrooms'
            required
          />
        </span>
        <span>
          <label className='update-label' for='Bahtrooms'>
            Bathrooms
          </label>
          <input
            className='update-input'
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            autoFocus
            type='number'
            placeholder='Bathrooms'
            required
          />
        </span>
        <span>
          <label className='update-label' for='Square Footage'>
            Sq ft
          </label>
          <input
            className='update-input'
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
            autoFocus
            type='number'
            placeholder='Square Footage'
            required
          />
        </span>
        <span>
          <label className='update-label' for='Image'>
            Image
          </label>
          <input
            className='update-input'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            autoFocus
            id='imageInput'
            type='text'
            placeholder='Image URL'
            required
          />
        </span>
        <button ref={submitRef} type='submit' style={{ display: 'none' }} />
      </form>
    </>
  );
}
