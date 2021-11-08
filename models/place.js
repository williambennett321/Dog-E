import mongoose from 'mongoose'
const Schema = mongoose.Schema

const favPlaceSchema = new Schema ({
  name: String,
  info: String,
  childSafe: String,
  safetyReq: String,
  
})

const favPlace = mongoose.model('favPlace', favPlaceSchema)

export {
  favPlace
}
