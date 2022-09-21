import React from 'react';
import './Modal.css';
import AddForm from './AddForm';
import EditForm from './EditForm';

export default function Modal({
  showModal,
  setShowModal,
  openModal,
  createHome,
}) {
  return (
    <>
      {showModal ? (
        <div className='modalBackground'>
          <div className='modalContainer'>
            <div className='titleCloseBtn'>
              <button onClick={openModal}>X</button>
            </div>
            <div className='title'>
              <h1>Are you sure you want to continue?</h1>
            </div>
            <div className='body'>
              {/* <p>The next page is awesome! You should move forward!</p> */}
              <AddForm />
            </div>
            <div className='footer'>
              <button onClick={openModal} id='cancelBtn'>
                Cancel
              </button>
              <button onClick={createHome}>Continue</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
