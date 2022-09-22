const Homes = require('./model/Homes');
const Users = require('./model/Users');
const database = require('./database');
const bcrypt = require('bryptjs');

module.exports = {
  getHomes: (req, res) => {
    console.log('Hit');
    database
      .query('SELECT * FROM public.homes ORDER BY id ASC;')
      .then((dbRes) => {
        console.log(dbRes[0]);
        res.status(200).send(dbRes[0]);
      });
  },

  getHomeById: (req, res) => {
    const id = req.params.id;
    if (Number(id)) {
      return Homes.findByPk(id)
        .then((dbRes) => {
          res.status(200).send(dbRes);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("There's a problem.", err);
        });
    }
  },
  createHome: (req, res) => {
    // const d = new Date();
    // const createdAt = d.toISOString(d.getFullYear() + '-' + d.getDate());
    // const updatedAt = d.toISOString(d.getFullYear() + '-' + d.getDate());

    const {
      home_address,
      home_type,
      home_price,
      sale_type,
      bedrooms,
      bathrooms,
      square_footage,
      image,
    } = req.body;

    // database
    //   .query(
    //     `INSERT INTO public.homes (home_address, home_type, home_price, sale_type, bedrooms, bathrooms, square_footage, image, created_at, updated_at) VALUES ('${home_address}','${home_type}','${home_price}','${sale_type}','${bedrooms}','${bathrooms}','${square_footage}','${image}','${createdAt}', '${updatedAt}') RETURNING *`,
    //     [
    //       home_address,
    //       home_type,
    //       home_price,
    //       sale_type,
    //       bedrooms,
    //       bathrooms,
    //       square_footage,
    //       image,
    //     ],
    //     (error, result) => {
    //       if (error) {
    //         throw error;
    //       }
    //     }
    //   )
    Homes.create({
      home_address,
      home_type,
      home_price,
      sale_type,
      bedrooms,
      bathrooms,
      square_footage,
      image,
    })
      .then((dbRes) => {
        console.log(dbRes);
        res.status(201).send(dbRes);
      })
      .catch((err) => console.log(err));

    console.log('Created new home:' + req.body.data);
  },

  updateHome: (req, res) => {
    const id = req.params.id;

    const {
      home_address,
      home_type,
      home_price,
      sale_type,
      bedrooms,
      bathrooms,
      square_footage,
    } = req.body;

    // database
    //   .query(
    //     `UPDATE homes SET home_address = '${home_address}', home_type = '${home_type}', home_price = ${home_price}, sale_type = '${sale_type}', bedrooms = ${bedrooms},bathrooms = ${bathrooms}, square_footage = ${square_footage} WHERE id = ${id}`
    //   )
    console.log('id = ' + id + 'body, ', req.body);

    Homes.update(
      {
        home_address,
        home_type,
        home_price,
        sale_type,
        bedrooms,
        bathrooms,
        square_footage,
      },
      {
        where: {
          id: id,
        },
      }
    )
      .then((dbRes) => {
        res.sendStatus(200).send(dbRes[0]);
      })
      .catch((err) => console.log(err));
  },

  deleteHome: (req, res) => {
    const id = req.params.id;

    return Homes.destroy({
      where: {
        id: id,
      },
    })
      .then((dbRes) => {
        res.sendStatus(200).send(dbRes);
      })
      .catch((err) => console.log(err));

    // database
    //   .query(`DELETE FROM public.homes WHERE id = ${id} RETURNING *;`)
    //   .then((dbRes) => {
    //     res.status(200).send(dbRes[0]);
    //   })
    //   .catch((err) => console.log(err));
  },

  auth: async (req, res) => {
    const { email, password } = req.body;

    const [[user]] = await Users.query(
      `SELECT * FROM users WHERE username ='${email}';`
    );

    console.log(user);

    if (user) {
      console.log('its a login');
    } else if (!user) {
      console.log('its a register');

      const salt = bcrypt.genSaltSync(5); //generates random characters, assign to var
      const passHash = bcrypt.hashSync(password, salt); //takes salt and pass to hash
      console.log(salt, passHash);

      const [[newUser]] = await Users.query(
        `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`
      );
    }
  },
};
