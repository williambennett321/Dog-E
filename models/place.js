import mongoose from 'mongoose'
const Schema = mongoose.Schema

const favPlaceSchema = new Schema ({
  name: String
  
})

const favPlace = mongoose.model('favPlace', favPlaceSchema)

export {
  favPlace
}
