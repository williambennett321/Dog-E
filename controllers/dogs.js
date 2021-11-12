import { Dog } from '../models/dog.js'
import { FavPlace } from '../models/favPlace.js'
import { Profile } from '../models/profile.js'

function index(req,res) {
  Dog.find({}, function(err, dogs) {
  res.render("dogs", {
    dogs,
    title: "All Dogs"
    })
  })
}



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
    Profile.findById(req.user.profile._id)
      .then(profile => {
        profile.dogs.push(dog._id)
        profile.save()
        .then (() => {
          res.redirect(`/dogs`)
        })
      })
  }) .catch(err => {
    console.log(err)
    res.redirect("/profiles")
  })
  //redirect to profile
}

function show(req,res) {
  Dog.findById(req.params.id)
  .populate("favPlaces")
  .then(dog => {
    res.render("dogs/show", {
      title: dog.name,
      dog
    })
  })
}


function deleteDog (req,res) {
  Dog.findByIdAndDelete(req.params.id, function(err, dog) {
    res.redirect("/dogs")
    })
}

export {
  index,
  newDogPage as new,
  create,
  show,
  deleteDog as delete
}


