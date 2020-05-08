const express = require('express')
const massive = require('massive')
require('dotenv').config()
const session = require('express-session')
const authcontroller = require('./authcontroller')
const controller = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const stripe = require('stripe')('sk_test_GSu0sgBzAbw6A8tu24Pef6Dc006YACVeYv')

const app = express()

app.use(express.json())



app.use(
    session({
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
      secret: SESSION_SECRET,
      
    })
  )

  app.post('/auth/login', authcontroller.login)
  app.post('/auth/register', authcontroller.register)
  app.delete('/auth/logout', authcontroller.logout)
  app.get('/auth/check', authcontroller.checkUser)

  app.get('/api/inventory/:id', controller.getProducts)
  app.get('/api/item/:id', controller.getItem)
  app.put('/api/cart/:id', controller.addToCart)
  app.get('/api/checkcart', controller.checkCart)
  app.delete('/api/deletecart', controller.deleteCart)
  app.put('api/quantity/:id', controller.addQuantity)

  app.post("/stripe/checkout", controller.checkout)

  app.get('/api/reviews', controller.getReviews)
  app.post('/api/postreview', controller.postReviews)
  app.put('/api/editreview/:id', controller.editReview)
  app.delete('/api/deletereview/:id', controller.deleteReview)

  massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
    app.listen(SERVER_PORT, () =>
      console.log(`Listening on ${SERVER_PORT}`)
    )
  })