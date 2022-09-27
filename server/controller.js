const bcrypt = require('bcryptjs');
const Homes = require('./model/Homes');
const Users = require('./model/Users');
const db = require('./database');

module.exports = {
  getHomes: (req, res) => {
    console.log('Hit');
    return Homes.findAll({
      order: [['id', 'ASC']],
    }).then((dbRes) => {
      console.log(dbRes);
      res.status(200).send(dbRes);
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
    Homes.create(req.body)
      .then((dbRes) => {
        console.log(dbRes);
        res.status(201).send(dbRes);
      })
      .catch((err) => console.log(err));

    console.log('Created new home:' + req.body.data);
  },

  updateHome: (req, res) => {
    const id = req.params.id;

    console.log('id = ' + id + 'body, ', req.body);

    Homes.update(req.body, {
      where: {
        id: id,
      },
    })
      .then(([dbRes]) => {
        res.sendStatus(200).json(dbRes);
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
  },

  auth: async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    console.log(req.body);
    const [[user]] = await db.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    console.log(user);

    if (user) {
      console.log('its a login');
      const authenticated = bcrypt.compareSync(password, user.password);
      if (authenticated) {
        const userInfo = {
          email: user.email,
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
        };
        req.session.user = userInfo;
        res.status(200).send(userInfo);
      } else {
        res.status(401).send('Wrong password!');
      }
    } else if (!user && firstName && lastName) {
      console.log('its a register');

      const salt = bcrypt.genSaltSync(5); //generates random characters, assign to var
      const passHash = bcrypt.hashSync(password, salt); //takes salt and pass to hash

      const [[newUser]] = await db.query(
        `INSERT INTO users (email, password, first_name, last_name) VALUES ('${email}','${passHash}','${firstName}','${lastName}')
        RETURNING id, email, first_name, last_name;`
      );
      req.session.user = newUser;
      res.status(200).send(newUser);
    } else {
      res
        .status(500)
        .send('Please use the register page to create an account.');
    }
  },
  deleteUser: async (req, res) => {
    const id = req.params;

    await db.query(`
    DELETE FROM users WHERE id='${id}'`);

    res.sendStatus(200).send('User deleted successfully.');
  },

  checkUser: (req, res) => {
    if (req.session.user) {
      res.sendStatus(200).send(req.session.user);
    }
    res.sendStatus(200);
  },
};
