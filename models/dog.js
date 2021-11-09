import mongoose from 'mongoose'
const Schema = mongoose.Schema

const myDogSchema = new Schema ({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  favToy: { type: String, required: true },
  favPlace:[{type: Schema.Types.ObjectId, ref: "favPlace"}]

})

const Dog = mongoose.model('myDog', myDogSchema)

export {
  Dog
}