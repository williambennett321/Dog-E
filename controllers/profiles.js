import { Profile } from "../models/profile.js"

function index(req,res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      title: "Game Goose Profiles",
      profiles,
    })
  })
}

function show(req,res) {

}

export {
  index,
  show
}