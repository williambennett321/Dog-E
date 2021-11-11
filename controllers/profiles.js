import { Profile } from "../models/profile.js"
import { Dog } from "../models/dog.js"
import { FavPlace } from "../models/dog.js"

function index(req,res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      title: "User Profiles",
      profiles,
    })
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('dogs')
  .then((profile) => {
    Profile.findById(req.user.profile)
    .then(userProfile => {
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        profile,
        userProfile,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create (req,res) {
  Dog.findById(req.body.dogId)
  .then(dog => {
    console.log(req.body.name)
    console.log(dog.favPlace)
    dog.favPlace.push(req.body)
    dog.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
        })
      })
    }

    
  

  
  


export {
  index,
  show,
  create
}