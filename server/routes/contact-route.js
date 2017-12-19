const contactController = require('../controllers/contactController')
const express = require('express')

const router = express.Router()
router.route('/')
  .get(contactController.list)
  .post(contactController.create)
route.route('/:id')
  .get(contactController.get)
  .put(contactController.update)
  .delete(contactController.remove)

route.param('id', contactController.load)

module.exports = router