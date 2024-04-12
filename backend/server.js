require('dotenv').config()

const express= require('express')
const mongoose= require('mongoose')
const workoutRoutes = require( './routes/workout.js' )

//express app

const app = express()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts/',workoutRoutes)

// app.get('/',(req,res)=>{
//     res.json({mssg:'welcome to the app'})
// })
mongoose.connect(process.env.MONGO_ID)
  .then(()=>{
    console.log("connected to MongoDB")
  })
  .catch((error)=>{
    console.log(error)
  })
//listen for requests
app.listen(process.env.PORT,()=>{
    console.log('listening on port ', process.env.PORT)
})