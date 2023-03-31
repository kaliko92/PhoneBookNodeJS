const express = require('express');
const multipart = require('connect-multiparty');
const bodyParser = require('body-parser');

const personRoute = require('./routes/API/personRoute');
const contactRoute = require('./routes/API/contactRoute');
const userRoute = require('./routes/API/userRoute');

const personViewRoute = require('./routes/personRoute');
const contactViewRoute = require('./routes/contactRoute');
const userViewRoute = require('./routes/userRoute');

const app = express();

app.set('view engine', 'pug');
app.set('views', './resources/views'); // default

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(multipart());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//     next();
//   });


app.use("/api", personRoute);
app.use("/api", contactRoute);
app.use("/auth", userRoute);

app.use("/", personViewRoute);
app.use("/", contactViewRoute);
app.use("/", userViewRoute);
// app.use("/", ViewRoute)
module.exports = app;