import { Router } from 'express'
import * as dogsCtrl from "../controllers/dogs.js"
const router = Router()

router.get('/new', dogsCtrl.new)

export {
  router
}