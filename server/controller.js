const bcrypt = require('bryptjs');
const Homes = require('./model/Homes');
const Users = require('./model/Users');

module.exports = {
  getHomes: (req, res) => {
    console.log('Hit');
    return Homes.findAll().then((dbRes) => {
      console.log(dbRes[0]);
      res.sendStatus(200).send(dbRes[0]);
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
    const { email, password } = req.body;

    const [[user]] = await Users.query(
      `SELECT * FROM users WHERE username ='${email}';`
    );

    console.log(user);

    if (user) {
      console.log('its a login');
      const authenticated = bcrypt.compareSync(password, user.password);
      if (authenticated) {
        const userInfo = { email: user.email, id: user.id };
        req.session.user = userInfo.sendStatus(200).send(userInfo);
      } else {
        res.sendStatus(401).send('Wrong password!');
      }
    } else if (!user && email) {
      console.log('its a register');

      const salt = bcrypt.genSaltSync(5); //generates random characters, assign to var
      const passHash = bcrypt.hashSync(password, salt); //takes salt and pass to hash
      console.log(salt, passHash);

      const [[newUser]] = await Users.query(
        `INSERT INTO users (email, password) VALUES ('${email}', '${password}', '${passHash}')
        RETURNING id, email;`
      );
    } else {
      res
        .sendStatus(500)
        .send('Please use the register page to create an account.');
    }
  },
  deleteUser: async (req, res) => {
    const id = req.params;

    await Users.query(`
    DELETE FROM usedrs WHERE id='${id}'`);

    res.sendStatus(200).send('User deleted successfully.');
  },

  checkUser: (req, res) => {
    if (req.session.user) {
      res.sendStatus(200).send(req.session.user);
    }
    res.sendStatus(200);
  },
};
