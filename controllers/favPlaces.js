import { FavPlace } from "../models/favPlace.js"

function newPlacePage(req,res) {
  FavPlace.find({}, function(err, favPlaces) {
  res.render("favPlaces/new", {
    favPlaces,
    title: "All Dogs"
    })
  })
}


  function create(req,res) {
    FavPlace.create(req.body, function(error, favPlaces) {
      favPlaces
      res.redirect("/dogs")
    })
  }



export {
  newPlacePage as new,
  create
}