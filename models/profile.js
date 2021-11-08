import mongoose from 'mongoose'
const Schema = mongoose.Schema

const myDogSchema = new Schema ({
  name: String,
  breed: String,
  favToy: [{type: Schema.Types.ObjectId, ref: ""}]

})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}