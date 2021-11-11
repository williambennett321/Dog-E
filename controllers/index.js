import { User } from "../models/user.js"

function index(req, res) {
  res.render('index', {
    title: 'Dog-E ',
    user: req.user ? req.user : null,
  })
}

export {
  index
}
