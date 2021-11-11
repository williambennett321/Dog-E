import mongoose from 'mongoose'
const Schema = mongoose.Schema

const favPlaceSchema = new Schema ({
  name: {type: String}
  
})

const DogSchema = new Schema ({
  name: { type: String, required: true },
  breed: { type: String },
  favToy: { type: String },
  favPlace : [favPlaceSchema]

})



const Dog = mongoose.model('Dog', DogSchema)
const FavPlace = mongoose.model('FavPlace', favPlaceSchema)

export {
  Dog,
  FavPlace
}