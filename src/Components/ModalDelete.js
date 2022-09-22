import React from 'react';
import './ModalAdd.css';

export default function ModalDelete({
  showModalDelete,
  setShowModalDelete,
  openModalDelete,
  getHomes,
  home,
  deleteHome,
}) {
  return (
    <>
      <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='titleCloseBtn'>
            <button onClick={openModalDelete}>X</button>
          </div>
          <div className='title'>
            <h1>Are you sure you want to delete this home?</h1>
          </div>
          <div className='body'>
            <p>This process is permanent!</p>
          </div>
          <div className='footer'>
            <button onClick={openModalDelete} id='cancelBtn'>
              Cancel
            </button>
            <button
              onClick={() => {
                deleteHome(home.id);
                alert('Home deleted!');
                getHomes();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
