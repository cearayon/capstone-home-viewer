import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCard from './Components/HomeCard';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ModalAdd from './Components/ModalAdd';

function App() {
  const [homesList, setHomesList] = useState();
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    getHomes();
  }, []);

  function getHomes() {
    axios
      .get('/homes')
      .then((res) => {
        setHomesList(res.data);
      })
      .catch((err) => console.error(err));
  }

  const deleteHome = (id) => {
    axios
      .delete(`/homes/${id}`)
      .then(getHomes)
      .catch((err) => console.error(err));
  };

  let mappedHomesList = homesList
    ? homesList.map((home) => (
        <HomeCard home={home} deleteHome={deleteHome} getHomes={getHomes} />
      ))
    : 'No homes currently listed. Please check back later!'; //turnary condition need so map doesn't trigger on first render.

  return (
    <>
      <div className='App'>
        <NavBar />
        <div className='container'>
          {/* <Routes>
            <Route path='/' element={<App />} />
            <Route path='/AddHome' element={<AddHome />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes> */}
        </div>
        <button className='addToggler' onClick={openModal}>
          Add a Home!
        </button>
        <ModalAdd
          getHomes={getHomes}
          showModal={showModal}
          setShowModal={setShowModal}
          openModal={openModal}
        />
        <div>{mappedHomesList}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
//<Home home={home}
//{!data
//           ? 'Loading...'
//           : data.map((home, index) => {
//               return <>
//               </>;
//             })}
//<div key={index}>
//                     <img src={home.image} alt='' />
//                   </div>
//                   <p> Address: {home.home_address} </p>
//                   <p> ${home.home_price} </p>
//                   <p> {home.home_type} </p>
//                   <p> {home.sale_type} </p>
//                   <p> {home.bedrooms} bd </p>
//                   <p> {home.bathrooms} ba </p>
//                   <p> {home.square_footage} sqft </p>
//                   <p> Posted at: {home.createdAt} </p>
//                   <p> Updated at: {home.updatedAt} </p>
