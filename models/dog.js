import mongoose from 'mongoose'
const Schema = mongoose.Schema

const myDogSchema = new Schema ({
  name: String, required: true,
  breed: String, required: true,
  favToy: String, required: true,
  favPlace:[{type: Schema.Types.ObjectId, ref: "favPlace"}]

})

const Dog = mongoose.model('myDog', myDogSchema)

export {
  Dog
}