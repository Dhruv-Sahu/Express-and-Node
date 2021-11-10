const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

app.use('/',express.static(path.resolve(__dirname,'public')))

app.use(bodyParser.json())

app.post('/data',(req,res)=>{
    console.log(req.body)
    res.json({status: 'ok'})
})


// //this static file allows you to see the txt files too in the public folder
// app.use('/static',express.static(path.resolve(__dirname,'public')))

// //Sending files to the browser
// app.get('/',(req,res)=>{ //get is used to request data from a specified resource
//     res.sendFile(
//         path.resolve(__dirname,'public/index.html')
//     )
// })

// app.get('/something', (req,res)=>{
//     res.send('Hey! Something\'s here')
// })
// //Post is used to send data to a server to create/update a resource
// // Put is the same as post but the difference is that calling the same PUT requrest multiple times will always produce the same result, calling a POST request repeatedly have side effects of creating the same resource multiple times.
// app.post('/something',(req,res) =>{
//     res.send('This is usually not visible')
// })

app.listen(process.env.PUBLIC_PORT)

//Express middlewares and middleware functions are functions that have access to the request object (req),the response object (res), and the next middleware function in the application's request-response cycle. Commonly denoted by the var. called next

// Middleware func eg with no mount path. The function executes every time the app recieves a request.

/* 
const express = require('express')
const app = express()

app.use(function (req,res,next){
    console.log('Time:', Date.now())
    next()
}) 
*/

/* This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}) */

// ROUTER LEVEL MIDDLEWARE

/* Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

const router = express.Router() 
Load router-level middleware by using the router.use() and router.METHOD() functions.

The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:

const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
*/