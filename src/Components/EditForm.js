import React, { useState } from 'react';
import axios from 'axios';

export default function AddForm(props) {
  const { getHomes } = props;

  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState('');
  const [homeType, setHomeType] = useState('');
  const [saleType, setSaleType] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [squareFootage, setSquareFootage] = useState(0);
  const [image, setImage] = useState('');

  function updateHome(id) {
    // let updateObject = {
    //   home_address: address,
    //   home_price: price,
    //   home_type: homeType,
    //   sale_type: saleType,
    //   bedrooms,
    //   bathrooms,
    //   square_footage: squareFootage,
    //   image,
    // };

    axios
      .put(`/homes/${props.home.id}`, {
        home_address: address,
        home_price: price,
        home_type: homeType,
        sale_type: saleType,
        bedrooms,
        bathrooms,
        square_footage: squareFootage,
        image,
      })
      .then(getHomes())
      .catch((err) => console.error(err));
  }

  return (
    <>
      <form
        className='form-container'
        class='addForm'
        onSubmit={(e) => {
          e.preventDefault();
          updateHome();
          alert('Home updated!');
        }}
      >
        <label htmlFor='addUser'></label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          autoFocus
          id='priceInput'
          type='number'
          placeholder='Price'
          required
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          autoFocus
          id='addressInput'
          type='text'
          placeholder='Address'
          required
        />
        <input
          onChange={(e) => setHomeType(e.target.value)}
          autoFocus
          id='typeInput'
          type='text'
          placeholder='Home Type'
          required
        />
        <input
          onChange={(e) => setSaleType(e.target.value)}
          autoFocus
          id='saleInput'
          type='text'
          placeholder='Sale Type'
          required
        />
        <input
          onChange={(e) => setBedrooms(e.target.value)}
          autoFocus
          id='bedroomsInput'
          type='number'
          placeholder='Bedrooms'
          required
        />
        <input
          onChange={(e) => setBathrooms(e.target.value)}
          autoFocus
          id='bathroomsInput'
          type='number'
          placeholder='Bathrooms'
          required
        />
        <input
          onChange={(e) => setSquareFootage(e.target.value)}
          autoFocus
          id='priceInput'
          type='number'
          placeholder='Square Footage'
          required
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          autoFocus
          id='imageInput'
          type='text'
          placeholder='Image URL'
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
}
