import mongoose from 'mongoose'
const Schema = mongoose.Schema

const myDogSchema = new Schema ({
  name: String,
  breed: String,
  favToy: String,
  
})