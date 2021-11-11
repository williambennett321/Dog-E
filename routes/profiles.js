import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)

router.get('/:id', isLoggedIn, profilesCtrl.show)

router.post('/:id/favPlace', isLoggedIn, profilesCtrl.create)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}