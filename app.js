// const express = require('express');
// const app = express();

// const morgan = require('morgan');

// // bring in routes

// const postRoutes = require('./routes/post');

// // const myOwnMiddleware = (req, res, next) => {
// //     console.log('middleware applied !');
// //     next();
// // };

// // middleware

// app.use(morgan("dev"));
// // app.use(myOwnMiddleware);

// app.use("/", postRoutes);

// const port = 8800;
// app.listen(port, () => {
//     console.log(`node js is listening on port: ${port}`)
// });

// ----------------------------------------------------
const express = require('express');
const app = express();

const bodyParser = require('body-parser')

const morgan = require('morgan');

// validator
const expressValidator = require('express-validator')

// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
const postRoutes = require('./routes/post');

// CORS
const cors = require('cors');

// Setup CORS - Accessible by other domains
// npm i cors --save
app.use(cors());

//db connection
// MONGO_URI=mongodb:localhost/nodeapi
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
).then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

// -------------------------------------------------

app.use(morgan("dev"));
// app.use(myOwnMiddleware);

app.use(bodyParser.urlencoded({ extended : true}));
app.use(expressValidator());
app.use("/", postRoutes);

const PORT = process.env.PORT || 8800;
// const port = ;
app.listen(port, () => {
    console.log(`node js is listening on port: ${port}`)
});