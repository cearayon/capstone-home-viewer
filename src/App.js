import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCard from './Components/HomeCard';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App(props) {
  const [homesList, setHomesList] = useState();

  useEffect(() => {
    axios
      .get('/homes')
      .then((res) => {
        console.log(res.data);
        setHomesList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  let mappedHomesList = homesList
    ? homesList.map((home) => <HomeCard home={home} />)
    : null; //turnary condition need so map doesn't trigger on first render.

  return (
    <div className='App'>
      <Header />
      <div>{mappedHomesList}</div>
      <Footer />
    </div>
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
