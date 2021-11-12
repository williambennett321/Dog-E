import { Router } from 'express'
import * as dogsCtrl from "../controllers/dogs.js"
const router = Router()

router.get("/", isLoggedIn, dogsCtrl.index)
router.get("/new", isLoggedIn, dogsCtrl.new)
router.post("/new", isLoggedIn, dogsCtrl.create)
router.get("/:id", isLoggedIn, dogsCtrl.show)
router.post("/:id", dogsCtrl.postPlace)
router.delete("/:id", dogsCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}