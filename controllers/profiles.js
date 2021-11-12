import { Profile } from "../models/profile.js"
import { Dog } from "../models/dog.js"
import { FavPlace } from "../models/favPlace.js"

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
    
  

  
  


export {
  index,
  show,
}