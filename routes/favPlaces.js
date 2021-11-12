import { Router } from 'express'
import * as favPlacesCtrl from "../controllers/favPlaces.js"

const router = Router()

router.get("/new", isLoggedIn, favPlacesCtrl.new)
router.post("/", favPlacesCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}