import { Profile } from "../models/profile.js"

function index(req,res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      title: "User Profiles",
      profiles,
    })
  })
}

function show(req,res) {
  Profile.findById(req.user.profile)
  .then(userProfile => { 
res.render("profiles/show" , {
  title: `Profile : ${profile.name}`,
  profile,
  userProfile
    })
  })
}

export {
  index,
  show
}