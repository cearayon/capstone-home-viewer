const express = require('express');
const router = express.Router();
const db = require('../database');
const Home = require('../Home');

//Get homes
router.get('/', (req, res) =>
  Home.findAll()
    .then((homes) => {
      console.log(homes);
      res.render('homes', {
        homes,
      });
    })
    .catch((err) => console.log(err))
);

//Add a home
router.get('/add', (req, res) => {
  const data = {
    home_address: '29843 N. Desert Angel',
    home_type: 'House',
    home_price: 2500000,
    sale_type: 'Buy',
    bedrooms: 5,
    bathrooms: 4,
    square_footage: 2400,
  };

  let {
    home_address,
    home_type,
    home_price,
    sale_type,
    bedrooms,
    bathrooms,
    square_footage,
  } = data;

  Home.create({
    home_address,
    home_type,
    home_price,
    sale_type,
    bedrooms,
    bathrooms,
    square_footage,
  })
    .then((home) => res.redirect('/homes'))
    .catch((err) => console.log(err));
});

module.exports = router;
