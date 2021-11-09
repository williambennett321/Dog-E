import { Router } from 'express'
import * as dogsCtrl from "../controllers/dogs.js"
const router = Router()

router.get('/new', isLoggedIn, dogsCtrl.new)
router.post('/new', isLoggedIn, dogsCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}