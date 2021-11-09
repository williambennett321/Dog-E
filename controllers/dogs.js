import { Dog } from '../models/dog.js'

function newDog(req,res) {
  Dog.find({}, function(err, dogs) {
    res.render("dogs/new", {
      title: "Add Dog",
    })
  })
}
export {
  newDog as new
}


