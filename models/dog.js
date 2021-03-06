import mongoose from 'mongoose'
const Schema = mongoose.Schema



const DogSchema = new Schema ({
  name: { type: String, required: true },
  breed: { type: String },
  favToy: { type: String },
  favPlaces : [{type: mongoose.Schema.Types.ObjectId, ref: "FavPlace"}]

})



const Dog = mongoose.model('Dog', DogSchema)

export {
  Dog
}