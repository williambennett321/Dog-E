import mongoose from 'mongoose'
const Schema = mongoose.Schema

const favPlaceSchema = new Schema ({
  name: String,
  dogs : [{type: Schema.Types.ObjectId, ref: "FavPlace"}]
  
})

const FavPlace = mongoose.model('FavPlace', favPlaceSchema)

export {
  FavPlace
}