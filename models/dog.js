import mongoose from 'mongoose'
const Schema = mongoose.Schema

const DogSchema = new Schema ({
  name: { type: String, required: true },
  breed: { type: String },
  favToy: { type: String },

})

const Dog = mongoose.model('Dog', DogSchema)

export {
  Dog
}