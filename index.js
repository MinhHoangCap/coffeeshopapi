
require('dotenv').config();

const express =require('express')

const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./routes/routes')
app.use('/', routes)

// const port = process.env.PORT || 3000
// // const home = require('./routes/home.mjs')

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// let routes = require('./router') //importing route
// routes(app)
// // app.use("/",home);
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// })
// app.listen(port);
// console.log('RESTful API server started on: ' + port);