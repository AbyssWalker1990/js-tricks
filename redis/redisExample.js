const express = require('express')
const axios = require('axios')
const cors = require('cors')
const redis = require("redis");

const redisclient = redis.createClient();
  
(async () => {
    await redisclient.connect();
})()
  
console.log("Connecting to the Redis")
  
redisclient.on("ready", () => {
    console.log("Connected!")
})
  
redisclient.on("error", (err) => {
    console.log("Error in the Connection")
})

const DEFAULT_EXPIRATION = 3600

const app = express()
app.use(cors())

app.get('/photos', async (req, res) => {
  const albumId = req.query.albumId
  const photos = await redisclient.get('photos')
  console.log(JSON.parse(photos))
  res.json(JSON.parse(photos))
 
  // const { data } = await axios.get(
  //   'https://jsonplaceholder.typicode.com/photos',
  //   { params: { albumId } }
  //   )
    
  //   redisclient.setEx('photos', DEFAULT_EXPIRATION, JSON.stringify(data))
  // res.json(data)
})

app.get('/photos/:id', async (req, res) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
  )

  res.json(data)
})

app.listen(3000, () => {
  console.log('App on PORT 3000')
})