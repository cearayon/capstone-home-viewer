import React, { useState } from 'react';

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
        className='form-container'
        class='addForm'
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
        <label htmlFor='updateHome'></label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          autoFocus
          id='priceInput'
          type='number'
          placeholder='Price'
          required
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          autoFocus
          id='addressInput'
          type='text'
          placeholder='Address'
          required
        />
        <input
          value={homeType}
          onChange={(e) => setHomeType(e.target.value)}
          autoFocus
          id='typeInput'
          type='text'
          placeholder='Home Type'
          required
        />
        <input
          value={saleType}
          onChange={(e) => setSaleType(e.target.value)}
          autoFocus
          id='saleInput'
          type='text'
          placeholder='Sale Type'
          required
        />
        <input
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          autoFocus
          id='bedroomsInput'
          type='number'
          placeholder='Bedrooms'
          required
        />
        <input
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          autoFocus
          id='bathroomsInput'
          type='number'
          placeholder='Bathrooms'
          required
        />
        <input
          value={squareFootage}
          onChange={(e) => setSquareFootage(e.target.value)}
          autoFocus
          id='priceInput'
          type='number'
          placeholder='Square Footage'
          required
        />
        Image:
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          autoFocus
          id='imageInput'
          type='text'
          placeholder='Image URL'
          required
        />
        <button ref={submitRef} type='submit' style={{ display: 'none' }} />
      </form>
    </>
  );
}
