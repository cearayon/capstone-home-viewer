import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';
import NavBar from './NavBar';
import ModalAdd from './ModalAdd';
import Spinner from './Spinner';

export default function Home() {
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

  let mappedHomesList = homesList ? (
    homesList.map((home) => (
      <HomeCard home={home} deleteHome={deleteHome} getHomes={getHomes} />
    ))
  ) : (
    <Spinner />
  ); //turnary condition need so map doesn't trigger on first render.

  return (
    <>
      <div className='App'>
        <NavBar />
        <div className='addToggerContainer'>
          <button className='addToggler' onClick={() => openModal()}>
            Add a Home!
          </button>
        </div>

        {showModal ? (
          <ModalAdd
            getHomes={getHomes}
            showModal={showModal}
            setShowModal={setShowModal}
            openModal={openModal}
          />
        ) : null}
        <div className='home-container'>{mappedHomesList}</div>
      </div>
    </>
  );
}
