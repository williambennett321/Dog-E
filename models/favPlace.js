import mongoose from 'mongoose'
const Schema = mongoose.Schema

const favPlaceSchema = new Schema ({
  name: String
  
})

const FavPlace = mongoose.model('FavPlace', favPlaceSchema)

export {
  FavPlace
}