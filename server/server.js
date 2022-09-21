//boilerplate for server setup//
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
require('dotenv').config();
app.use(express.json());
app.use(cors());
//end boilerplate for server

const {
  getHomes,
  getHomeById,
  createHome,
  updateHome,
  deleteHome,
} = require('./controller.js');

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//database import
const db = require('./database');

//set static folder
app.use(express.static(path.join(__dirname, 'src')));

//test db
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error:' + err));

app.get('/homes', getHomes);
app.get('/homes/:id', getHomeById);
app.post('/homes', createHome);
app.put('/homes/:id', updateHome);
app.delete('/homes/:id', deleteHome);

// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello' });
// });

// Homes Route
app.use('/homes', require('./routes/homes'));

// //create home
// app.post('/homes', async (req, res) => {
//   try {
//     console.log(req.body);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

//port boilerplate
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started on port ${port}!`));

//end port boilerplate
