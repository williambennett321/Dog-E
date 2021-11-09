import { Dog } from '../models/dog.js'
import { Profile } from '../models/profile.js'

function newDogPage(req, res) {
  Dog.find({}, function (err, dogs) {
    res.render("dogs/new", {
      title: "Add Dog",
    })
  })
}
function create(req, res) {
  //create dog on profile
  Dog.create(req.body)
  .then(dog => {
    console.log(req.user.profile._id)
    Profile.findById(req.user.profile._id)
      .then(profile => {
        console.log(profile)
        console.log(dog._id)
        profile.dogs.push(dog._id)
        profile.save()
        .then (() => {
          res.redirect(`/profiles/${profile._id}`)
        })
      })
  }) .catch(err => {
    console.log(err)
    res.redirect("/profiles")
  })
  //redirect to profile
}
export {
  newDogPage as new,
  create
}


