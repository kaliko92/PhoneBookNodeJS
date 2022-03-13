const express = require('express');
const multipart = require('connect-multiparty');
const bodyParser = require('body-parser');

const personRoute = require('./routes/personRoute');
const contactRoute = require('./routes/contactRoute');

const userRoute = require('./routes/userRoute');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(multipart());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });


app.use("/api", personRoute);
app.use("/api", contactRoute);

app.use("/auth/user", userRoute);

module.exports = app;