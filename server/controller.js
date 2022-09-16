const homes = require('./database');

module.exports = {
  sendHomes: (req, res) => {
    console.log('Hit');
    homes
      .query('SELECT * FROM public.homes ORDER BY home_id ASC')
      .then((dbRes) => {
        console.log(dbRes[0]);
        res.status(200).send(dbRes[0]);
      });
  },

  createHome: (req, res) => {
    const {
      home_address,
      home_type,
      home_price,
      sale_type,
      bedrooms,
      bathrooms,
      square_footage,
    } = req.body;

    let newHome = {
      home_address,
      home_type,
      home_price,
      sale_type,
      bedrooms,
      bathrooms,
      square_footage,
    };
  },

  updateHome: (req, res) => {},

  deleteHome: (req, res) => {},
};
